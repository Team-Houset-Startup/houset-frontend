import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Button from '../Components/Button'

import "./assets/style/cart-summary.css"

export default function CartSummary({ product, total }) {
    return (
        <>
            {/* <input type="text" className="input-promotion-code" placeholder='Masukkan Kode Promo' /> */}

            <Container className="cart-summary-container">
                <Row className="cart-summary-title">
                    <p> Ringkasan Belanja </p>
                </Row>
                <Row xs={2} className="cart-summary-detail">
                    <Col xl className="cart-summary-product">
                        {product.name}
                    </Col>
                    <Col xl className="cart-summary-price">
                        <p> Rp {total} </p>
                    </Col>
                </Row>
                {/* <Row className="cart-summary-disc">
                        <Col xl>
                            <p> Discount </p>
                        </Col>
                        <Col xl style={{ textAlign: "right" }}>
                            <p> - Rp 40.000 </p>
                        </Col>
                    </Row> */}
                <hr />
                <Row xs={2} className="cart-total-price">
                    <Col xl>
                        <p> Total </p>
                    </Col>
                    <Col xl style={{ textAlign: "right" }}>
                        <p> Rp {total} </p>
                    </Col>
                </Row>
                <Row className="cart-checkout">
                    <Col>
                        <Button type="primary-button" text="Checkout" toPage="/invoice" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
