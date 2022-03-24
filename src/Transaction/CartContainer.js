import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { product } from "../db/product"
import { Plus, Minus } from '../Components/Element'
import CartItem from './CartItem'

import "./assets/style/cart-container.css"

// Show cart item with container in the Cart.js page

// export function Plus() {
//     return (
//         <svg className="button-operator" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="#055053" />
//         </svg>
//     )
// }

// export function Minus() {
//     return (
//         <svg className="button-operator" width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M13 2H1C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H13C13.55 0 14 0.45 14 1C14 1.55 13.55 2 13 2Z" fill="#055053" />
//         </svg>
//     );
// }

let totalPrice = 0;

export function countPrice() {
    let price
    product.map((item, key) => {
        price += item.subPrice
    })
    return price;
}

export default function CartContainer(props) {
    const [qty, setQty] = useState(1);
    const [subPrice, setSubPrice] = useState();

    const didDelete = (e) => {
        e.preventDefault();
        alert("Produk berhasil dihapus");
        // const navigate = useNavigate();
        // navigate("/cart");
    }

    function countTotalPrice() {
        let price = 0;
        product.map((item) => {
            price += item.subPrice
        })
        return price;
        // return (
        //     <p> 10 </p>
        // )
    }

    return (
        <Container className="cart-container">
            <Row className="cart-container-header">
                <Col xl={{ order: 1, span: 5 }} style={{ width: "300px", textAlign: "left" }} > Produk </Col>
                <Col xl={{ order: 2 }}> Harga </Col>
                <Col xl={{ order: 3 }}> Jumlah </Col>
                <Col xl={{ order: 4 }}> Total </Col>
            </Row>

            {product.map((item, key) => {
                return (props.feature == "cart") ? (
                    <Row className="cart-container-elm">
                        <Col xl={{ order: 1, span: 5 }} lg={{ order: 1, span: 6 }} style={{ width: "300px" }} >

                            <CartItem type={item.type} name={item.name} />
                        </Col>

                        <Col xl={{ order: 2 }} lg={{ order: 2 }} className="cart-container-info">
                            <p> Rp {item.price} </p>
                        </Col>

                        <Col xl={{ order: 3 }} lg={{ order: 3 }} className="cart-container-info">
                            <button className="operator-button" onClick={() => { setQty(qty - 1) }} disabled={qty == 1} > <Minus /> </button>
                            <span> {qty} </span>
                            <button className="operator-button" onClick={() => { setQty(qty + 1) }}> <Plus /> </button>
                        </Col>

                        <Col xl={{ order: 4 }} lg={{ order: 4 }} className="cart-container-info">
                            <Row xl={2}>
                                Rp {item.subPrice}
                            </Row>
                            <Row>
                                <p className="delete-from-cart" onClick={didDelete}> hapus </p>
                            </Row>
                        </Col>
                    </Row>
                ) : (props.feature == "checkout") ? (
                    <Row className="cart-container-elm">
                        <Col xl={{ order: 1, span: 5 }} lg={{ order: 1, span: 6 }} style={{ width: "300px" }} >

                            <CartItem type={item.type} name={item.name} />
                        </Col>

                        <Col xl={{ order: 2 }} lg={{ order: 2 }} className="cart-container-info">
                            <p> Rp {item.price} </p>
                        </Col>

                        <Col xl={{ order: 3 }} lg={{ order: 3 }} className="cart-container-info">
                            {item.qty}
                        </Col>

                        <Col xl={{ order: 4 }} lg={{ order: 4 }} className="cart-container-info">
                            <Row xl={2}>
                                Rp {item.subPrice}
                            </Row>
                        </Col>
                    </Row>
                ) : (<div> Wrong feature command </div>)
            }
            )}
            <Row>
                <p className="cart-subtotal"> Subtotal Rp {countTotalPrice()} </p>
            </Row>
        </Container>
    )
}
