import React from 'react'
import Lampu from "./assets/image/lampu.png"
import { Col, Container, Row } from 'react-bootstrap';

import "./assets/style/cart-item.css";

export default function CartItem(props) {
    return (
        <Container className="cart-item-container">
            
            <Row xl={4, "auto"}>
            <input type="checkbox" /> 
                <Col className="cart-item-col-1">
                    <img className="cart-item-pict" src={Lampu} alt="cart-item-pict" />
                </Col>
                <Col className="cart-item-col-2">
                    <p className="cart-item-type"> {props.type} </p>
                    <p className="cart-item-name"> {props.name} </p>
                </Col>
            </Row>
        </Container>
    )
}

