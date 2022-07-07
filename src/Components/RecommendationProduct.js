import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './FurnitureCard';
import LinkSeeMore from './LinkSeeMore';

import products from '../db/furniture.json';

import "./assets/style/auto-suggest-item.css";


const ProductList = (count) => {
    let Products = [];
    let row = count;
    let col = 4;
    let item = 0;
    let tempList=[];
    // console.log(count);
    products.slice(0, count).forEach((product) => {
        tempList.push(
            <Col xl={3} key={product.id}>
                <ProductCard product={product} />
            </Col>
        )
        
    });
    Products.push(
        <Row> {tempList} </Row>
    )

    return (
        Products
    )
};

export default function RecommendationProduct(props) {
    return (
        <Container className="product-auto-suggest">
            <Row>
                <LinkSeeMore title="Produk yang mungkin Anda suka" links="/furnitur" text="Lihat Semua" />
            </Row>
            <Row xl={12} className="product-auto-list">
                {ProductList(props.count)}
            </Row>
        </Container>
    )
}
