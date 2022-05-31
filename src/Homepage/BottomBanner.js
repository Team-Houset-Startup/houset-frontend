import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../Components/Button'

import "./assets/style/bottom-banner.css"

export default function BottomBanner() {
    return (
        <Container fluid className="bottom-banner-container">
            <Row className="bottom-banner-title">
                <Col>
                    <h1> KAMI SIAP MELAYANI ANDA </h1>
                    <h2> APAPUN KEBUTUHANNYA </h2>
                </Col>
            </Row>
            <Row className="bottom-banner-button">
                <Col> 
                    <a href="https://wa.me/6282218585101" target={"_blank"}> <Button type="primary-button" text="Hubungi Kami Sekarang" /> </a>
                </Col>
            </Row>
        </Container>
    )
}
