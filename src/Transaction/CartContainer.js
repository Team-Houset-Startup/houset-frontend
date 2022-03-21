import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { product } from "../db/product"
import { Plus, Minus } from '../Components/Button'
import CartItem from './CartItem'

import "./assets/style/cart-container.css"

// Show cart item with container in the Cart.js page

let totalPrice = 0;

export function countPrice() {
    let price
    product.map((item, key) => {
        price += item.subPrice
    })
    return price;
}

export default function CartContainer() {
    const didDelete = (e) => {
        e.preventDefault();
        alert("Produk berhasil dihapus");
        // const navigate = useNavigate();
        // navigate("/cart");
    }

    return (
        <Container className="cart-container">
            <Row  className="cart-container-header">
                <Col xl= { {order:1, span:5} } style={ {width:"300px", textAlign:"left"} } > Produk </Col>
                <Col xl= { {order:2} }> Harga </Col>
                <Col xl= { {order:3} }> Jumlah </Col>
                <Col xl= { {order:4} }> Total </Col>
            </Row>

            {product.map((item, key) => {
                return (
                    <Row className="cart-container-elm">
                        <Col xl= { {order:1, span:5} } lg= { {order:1, span:6} } style={ {width:"300px"} } > 
                            
                            <CartItem type={item.type} name={item.name} />
                        </Col>

                        <Col xl= { {order:2} } lg= { {order:2} }className="cart-container-info">
                            <p> Rp {item.price} </p>
                        </Col>

                        <Col xl= { {order:3} } lg= { {order:3} }className="cart-container-info">
                            <Minus />
                            {item.qty}
                            <Plus />
                        </Col>
                        
                        <Col xl= { {order:4} } lg= { {order:4} }className="cart-container-info">
                            Rp {item.subPrice}
                            <p className="delete-from-cart" onClick={didDelete}> hapus </p>
                        </Col>
                    </Row>
                )
            })
            }
        </Container>
    )
}
