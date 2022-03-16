import React from 'react'
import Lampu from "./assets/image/lampu.png"
import { Col, Container, Row } from 'react-bootstrap';

import "./assets/style/product-cart.css";

export default function ProductCart(props) {
    return (
        <Container>
            <Row sm={2, "auto"}>
                <Col className="product-cart-col-1">
                    <img className="product-cart-pict" src={Lampu} alt="product-cart-pict" />
                </Col>
                <Col className="product-cart-col-2">
                    <p className="product-cart-type"> {props.type} </p>
                    <p className="product-cart-name"> {props.name} </p>
                </Col>
            </Row>
        </Container>
    )
}

