import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Product/ProductCard';

import "./assets/style/recommendation.css";
import LinkSeeMore from '../Components/LinkSeeMore';

export default function Recommendation() {
    return (
        <div className="product-recommendation">
            <Container className="product-recommend-header">
                <Row> 
                    <Col> Produk yang mungkin Anda suka </Col>
                    <Col> <LinkSeeMore links="/furnitur" text="Lihat Semua" /> </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
