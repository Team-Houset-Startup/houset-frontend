import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Kursi from "./assets/image/kursi.png"
import Kursi1 from "./assets/image/kursi1.png"
import Kursi2 from "./assets/image/kursi2.png"
import Kursi3 from "./assets/image/kursi3.png"
import Kursi4 from "./assets/image/kursi4.png"


import "./assets/style/product-thumbnail.css"

export default function ProductThumbnail() {
    return (
        <Container className="thumbnail-container">
            <Row>
                <Col className="thumbnail-360">
                    <img src={Kursi} alt="kursi" />
                </Col>
                <Col className="thumbnail-list">
                    <Row className="thumbnail-list-item">
                        <img src={Kursi1} alt="kursi" />
                    </Row>

                    <Row className="thumbnail-list-item">
                        <img src={Kursi2} alt="kursi" />
                    </Row>

                    <Row className="thumbnail-list-item">
                        <img src={Kursi3} alt="kursi" />
                    </Row>
                    
                    <Row className="thumbnail-list-item">
                        <img src={Kursi4} alt="kursi" />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
