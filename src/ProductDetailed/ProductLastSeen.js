import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard';

import "./assets/style/recommendation.css";
import LinkSeeMore from '../Components/LinkSeeMore';

const ProductList = () => {
    let Products = [];
    let row = 1;
    let col = 4;
    for (var i = 0; i < row; i++) {
        Products.push(
            <Row key={i}>
                {
                    [...Array(col)].map((e, index) => {
                        return (
                            <Col xl={3} key={index}>
                                <ProductCard />
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
    // for (var i = 0; i < col; i++) {
    //     Products.push(
    //         <Col xl={3}>
    //             <ProductCard />
    //         </Col>
    //     );
    // }

    return (
        Products
    )
};

export default function ProductLastSeen() {
    return (
        <div className="product-recommendation">
            
            <LinkSeeMore title="Produk yang terakhir Anda lihat" links="/furnitur" text="Lihat Semua"/>

            <Container className="product-recommend-container">

                <Row>
                    {ProductList()}
                    {/* <Col xl={3}>
                        <ProductCard />
                    </Col>
                    <Col xl={3}>
                        <ProductCard />
                    </Col>
                    <Col xl={3}>
                        <ProductCard />
                    </Col>
                    <Col xl={3}>
                        <ProductCard />
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}
