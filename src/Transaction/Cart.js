import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import CartItem from './CartItem'
import "./assets/style/cart.css"
import { product } from "../db/product"
import Button, { Plus, Minus } from '../Components/Button'
import Recommendation from '../Components/Recommendation'
import CartContainer from './CartContainer'

export default function Carts() {
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(35000);
    const [subPrice, setSubPrice] = useState(qty * price);
    // const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();
    const goToCheckout = () => navigate("/checkout", { replace: true });

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
        <>
            <NavigationBar />
            
            <Container className="transaction-container-main" responsive>
                <Row xl={12} lg={12} className="justify-content-md-center">
                    <p className="transaction-title"> Keranjang </p>

                    <Col>
                        <CartContainer />
                        {/* <Table borderless className="cart-table">
                            <thead className="cart-table-header">
                                <tr>
                                    <th style={{ textAlign: "left", width: "300px" }}> Produk </th>
                                    <th> Harga </th>
                                    <th> Jumlah </th>
                                    <th> Total </th>
                                </tr>
                            </thead>
                            <tbody className="cart-table-body">

                                {product.map((item, key) => {
                                    priceSum += item.subPrice
                                    return (
                                        <tr>
                                            <td style={{ textAlign: "left", width: "auto" }}>

                                                <input type="checkbox" />
                                                <CartItem type={item.type} name={item.name} />

                                            </td>
                                            <td> 
                                                <p className="align-items-center"> Rp {item.price} </p> 
                                            </td>
                                            <td>
                                                <Minus />
                                                {item.qty}
                                                <Plus />
                                            </td>
                                            <td>
                                                Rp {item.subPrice}
                                                <p className="delete-from-cart" onClick={didDelete}> hapus </p>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </Table> */}
                    </Col>

                    <Col xl={4} lg={5}>
                        <input type="text" className="input-promotion-code" placeholder='Masukkan Kode Promo' />
                        <div className="cart-summary">
                            <Container className="cart-container-summary">
                                <Row className="cart-summary-title">
                                    <p> Ringkasan Belanja </p>
                                </Row>
                                {product.map((item, key) => {

                                    return (
                                        <Row xs={2} className="cart-summary-detail">
                                            <Col xl className="cart-summary-product">
                                                {item.name}
                                            </Col>
                                            <Col xl className="cart-summary-price">
                                                <p> Rp {` `} {item.subPrice} </p>
                                            </Col>
                                        </Row>
                                    )
                                })}
                                <hr />
                                <Row xs={2} className="cart-total-price">
                                    <Col xl>
                                        <p> Total </p>
                                    </Col>
                                    <Col xl style={{ textAlign: "right" }}>
                                        <p> Rp {countTotalPrice()} </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button type="primary-button" text="Checkout" toPage="/checkout" />
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>

                <Row xl={12} md={8}>
                    <Col xl={{ span: 2 }} style={{ margin: 0 }}>
                        <Button type="secondary-button" text="Hapus semua" isDisabled={true} />
                    </Col>

                    <Col xl={{ span: 2 }}>
                        <Button type="primary-button" text="Lanjut Belanja" />
                    </Col>
                    <Col xl={{ span: 3, offset: 2 }}>
                        <p className="cart-subtotal"> Subtotal Rp {countTotalPrice()} </p>
                    </Col>
                </Row>
                {/* <div>
                    <Button type="secondary-button" text="Hapus semua" isDisabled={true} />
                    <Button type="primary-button" text="Lanjut Belanja" />
                </div> */}
            </Container>

            <Recommendation count="1" />

            <Footer />
        </>
    )
}
