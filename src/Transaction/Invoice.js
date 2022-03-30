import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../Components/Button'

import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import Dropdown from '../Components/Dropdown'

import "./assets/style/invoice.css"

export default function Invoice() {
    const [deadline, setDeadline] = useState(new Date().toLocaleString())
    return (
        <>
            <NavigationBar />

            <Container className="invoice-container">

                <Row className="invoice-deadline">
                    <Col className="invoice-deadline-container">
                        <p className="inv-deadline-text"> Selesaikan pembayaran dalam </p>
                        <p className="inv-deadline-time">
                            20:24:21
                        </p>
                        <p className="inv-deadline-text2"> Batas akhir pembayaran </p>
                        <p className="inv-deadline-text"> {deadline} </p>
                    </Col>
                </Row>

                <Row className="invoice-payment">
                    <Row>
                        <Col className="inv-part-title"> BNI Virtual Account </Col>
                        <Col className="inv-payment-logo"> BNI Virtual Account </Col>
                    </Row>

                    <hr />

                    <Row>
                        <Col>
                            <p classname="inv-part-subtitle"> Nomor Virtual Account </p>
                            <p className="inv-part-content"> 08080213123123103123 </p>
                        </Col>
                        <Col className="inv-payment-action"> Salin </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p classname="inv-part-subtitle"> Total Pembayaran </p>
                            <p className="inv-part-content"> Rp 1.050.000 </p>
                        </Col>
                        <Col className="inv-payment-action"> Lihat Detail </Col>
                    </Row>
                </Row>

                <Row md={8} sm={12} className="invoice-button-col">
                    <Col md sm={6}>
                        <Button type="action-button" text="Belanja Lagi" />
                    </Col>

                    <Col md sm={6}>
                        <Button type="primary-button" text="Cek Status Pembayaran" />
                    </Col>
                </Row>

                <Row className="invoice-guide">
                    <p className="inv-part-title"> Cara Pembayaran </p>
                    <hr />
                    <p className="inv-guide-subtitle"> PANDUAN PEMBAYARAN </p>

                    <Row>
                        <Col className="inv-part-content"> ATM BNI </Col>
                        <Col style={ {textAlign:"right"} }> <Dropdown /> </Col>
                    </Row>
                    <Row>
                        <Col className="inv-part-content"> Mobile Banking BNI </Col>
                        <Col style={ {textAlign:"right"} }> <Dropdown /> </Col>
                    </Row>
                    <Row>
                        <Col className="inv-part-content"> Internet Banking BNI </Col>
                        <Col style={ {textAlign:"right"} }> <Dropdown /> </Col>
                    </Row>
                </Row>
            </Container>

            <Footer />
        </>
    )
}
