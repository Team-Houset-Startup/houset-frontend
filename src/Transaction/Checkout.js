import React, { useContext, useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import CheckoutContainer from './CheckoutContainer'
import CartItem from './CartItem'
import CartSummary from "./CartSummary.js"
import { product } from "../db/product"

import "./assets/style/checkout.css"
import CheckoutContext from '../context/CheckoutProvider'
import axios from '../api/axios'
import useCheckout from '../hooks/useCheckout'

export default function Checkout() {
    const { checkoutItem } = useCheckout();
    const [productBought, setProductBought] = useState({});
    // useEffect(() => {
    //     const getDataCheckout = async () => {
    //         await axios
    //             .get(`/product/${checkoutItem}`, {})
    //             .then((res) => setProductBought(res.data?.data))
    //             .catch((err) => console.log(err));
    //     };
    //     getDataCheckout();
    // }, [checkoutItem]);

    return (
        <>
            <NavigationBar />
            <Container className="transaction-container-main">
                <Row>
                    <p className="transaction-title"> Checkout </p>
                    <p className="checkout-subtitle"> Mohon selesaikan pembelian anda dengan melengkapi detail pembayaran </p>
                </Row>

                <Row>
                    <p className="checkout-loc"> Alamat Pengiriman </p>
                </Row>

                <Row xl={12} sm={2} >
                    {/* <hr /> */}
                    <Col xl={{ span: 7 }} sm={{ span: 10 }}>
                        <Row className="checkout-details">
                            <Col>
                                <p className="checkout-details-text"> Muhammad Juno <span> (Rumah) </span> </p>
                                <p className="checkout-details-text"> 082249128412 </p>
                                <p className="checkout-details-text"> Perumahan Permata Buah Batu, Blok. C, No. 146, Lengkong, Bojongsoang, Bandung,40287 </p>
                            </Col>

                            <Col xl={{ span: 1 }} sm={{ span: 1 }} className="checkout-details-edit justify-content-end">
                                <Button type="action-button" text="Edit" />
                            </Col>
                        </Row>
                        <Row>
                            <CheckoutContainer product={productBought} />
                        </Row>
                        <Row>
                            <Col xl={{ offset: 10, span: "auto" }} style={{ marginTop: 10 }}>
                                <Button type="primary-button" text="Pilih Kurir" toPage="/" />
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={{ span: 3, offset: 1 }} sm={{ span: 10 }}>
                        <CartSummary product={productBought} />
                    </Col>
                    {/* <hr /> */}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
