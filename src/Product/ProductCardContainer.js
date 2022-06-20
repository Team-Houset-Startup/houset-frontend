import React from 'react';
import FurnitureCard from '../Components/FurnitureCard';
import RoomCard from '../Components/RoomCard';

import "./assets/style/product-card-container.css";

import FurnitureData from "../db/furniture.json";
import { Container, Row, Col } from 'react-bootstrap';

export default function ProductCardContainer( {variant, products} ) {
    // Fetch furniture product from API
    // show it in a section of product card
    function buildProductList() {
        const productList = [];
        let tempList = [];
        let item = 0;
        products.forEach((product) => {
            // console.log(product);
            item += 1;
            tempList.push(
                <Col className="product-card-item">
                    {(variant === "furniture") ? <FurnitureCard product={product} /> : <RoomCard product={product} />}
                </Col>
            );
            if (item % 4 == 0) {
                productList.push(<Row>{tempList}</Row>);
                tempList = [];
            }
        });
        // return tempList;
        return productList;
    }
    return (
        <Container className="product-card-container">
            {buildProductList()}
        </Container>
    )
}
