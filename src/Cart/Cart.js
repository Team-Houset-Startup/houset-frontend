import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import ProductCart from './ProductCart'

import "./assets/style/cart.css"
import { product } from "../db/product"
import Button, { Plus, Minus } from '../Components/Button'

export default function Carts() {
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(35000);
    const [subPrice, setSubPrice] = useState(qty * price);
    const [totalPrice, setTotalPrice] = useState(0);

    let priceSum = 0;

    const didDelete = (e) => {
        e.preventDefault();
        alert("Produk berhasil dihapus");
        // const navigate = useNavigate();
        // navigate("/cart");
    }

    return (
        <>
            <NavigationBar />

            <Container className="cart-container-main" responsive>
                <Row xl={12} lg={12} className="justify-content-md-center">
                    <p className="cart-title"> Keranjang </p>
                    <Col xl={8} lg={7}>
                        <Table borderless className="cart-table">
                            <thead className="cart-table-header">
                                <tr>
                                    <th style={{ textAlign: "left", width: "300px" }}> Produk </th>
                                    <th> Harga </th>
                                    <th> Jumlah </th>
                                    <th> Total </th>
                                </tr>
                            </thead>
                            <tbody className="cart-table-body">
                                {/* Show the product added to cart with tables*/}

                                {product.map((item, key) => {
                                    // setTotalPrice(item.subPrice + this.totalPrice);
                                    priceSum += item.subPrice
                                    return (
                                        <tr>
                                            <td style={{ textAlign: "left", width: "auto" }}>

                                                <input type="checkbox" />
                                                <ProductCart type={item.type} name={item.name} />

                                            </td>
                                            <td> Rp {item.price} </td>
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
                        </Table>
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
                                <Row xs={2} className="cart-total-price">
                                    <Col xl>
                                        <p> Total </p>
                                    </Col>
                                    <Col xl style={ {textAlign: "right"} }>
                                        <p> Rp {priceSum} </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button type="primary-button" text="Checkout" />
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>

                <Row xl={12} md={8}>
                    <Col xl={ {span: 2} }  style={ {margin:0} }>
                        <Button type="secondary-button" text="Hapus semua" isDisabled={true}/>
                    </Col>

                    <Col xl={ {span: 2} }>
                        <Button type="primary-button" text="Lanjut Belanja" />
                    </Col>
                    <Col xl={ {span: 3, offset:2} }>
                        <p className="cart-subtotal"> Subtotal Rp {priceSum} </p>
                    </Col>
                </Row>
                {/* <div>
                    <Button type="secondary-button" text="Hapus semua" isDisabled={true} />
                    <Button type="primary-button" text="Lanjut Belanja" />
                </div> */}
            </Container>

            <Footer />
        </>
    )
}
