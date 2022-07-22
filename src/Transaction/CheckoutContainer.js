import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { product } from "../db/product"
import { Plus, Minus } from '../Components/Element'
import CartItem from './CartItem'

import "./assets/style/cart-container.css"

export default function CheckoutContainer({ product, total }) {
    return (
        <Container className="cart-container">
            <Row className="cart-container-header">
                <Col xl={{ order: 1, span: 5 }} style={{ width: "300px", textAlign: "left" }} > Produk </Col>
                <Col xl={{ order: 2 }}> Harga </Col>
                <Col xl={{ order: 3 }}> Jumlah </Col>
                <Col xl={{ order: 4 }}> Total </Col>
            </Row>
            <Row className="cart-container-elm">
                <Col xl={{ order: 1, span: 5 }} lg={{ order: 1, span: 6 }} style={{ width: "300px" }} >
                    <CartItem product={product} />
                </Col>

                <Col xl={{ order: 2 }} lg={{ order: 2 }} className="cart-container-info">
                    <p> Rp {product?.price} </p>
                </Col>

                <Col xl={{ order: 3 }} lg={{ order: 3 }} className="cart-container-info">
                    <p> {product?.qty} </p>
                </Col>

                <Col xl={{ order: 4 }} lg={{ order: 4 }} className="cart-container-info">
                    <p> Rp {total} </p>
                </Col>
            </Row>
            <Row>
                <p className="cart-subtotal"> Total bayar Rp {total} </p>
            </Row>
        </Container>
    )
}
