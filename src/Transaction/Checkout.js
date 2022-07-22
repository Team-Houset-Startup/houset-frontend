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

export default function Checkout({ checkoutItem }) {
    // const { checkoutItem } = useCheckout();
    // const [productBought, setProductBought] = useState({});
    // const productBought = checkoutItem;

    // useEffect(() => {
    //     setProductBought(checkoutItem);
    // }, [])

    // useEffect(() => {
    //     const getDataCheckout = async () => {
    //         await axios
    //             .get(`/product/${checkoutItem}`, {})
    //             .then((res) => setProductBought(res.data?.data))
    //             .catch((err) => console.log(err));
    //     };
    //     getDataCheckout();
    //     return () => {
    //         setProductBought({});
    //     };
    // }, []);

    const totalPrice = checkoutItem.qty * checkoutItem.price;

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
                            <CheckoutContainer product={checkoutItem} total={totalPrice} />
                        </Row>
                    </Col>

                    <Col xl={{ span: 3, offset: 1 }} sm={{ span: 10 }}>
                        <CartSummary product={checkoutItem} total={totalPrice} />
                    </Col>
                    {/* <hr /> */}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
