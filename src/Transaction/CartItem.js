import React, { useEffect, useState } from 'react'
import Lampu from "./assets/image/lampu.png"
import { Col, Container, Row } from 'react-bootstrap';

import "./assets/style/cart-item.css";

export default function CartItem({ product }) {
    const baseImage = "https://houset.my.id/storage/app/public/";
    const [productImage, setProductImage] = useState();
    
    console.log(product)
    // useEffect(() => {
    //     if (Object.keys(product).length !== 0 ) {
    //         setProductImage(product.image_gallery[0].location);
    //     }
    // })

    return (
        <Container className="cart-item-container">
            <Row xl={4, "auto"}>
                <input type="checkbox" />
                <Col className="cart-item-col-1">
                    <img className="cart-item-pict" src={Lampu} alt="cart-item-pict" />
                    {/* <img className="cart-item-pict" src={baseImage + productImage} alt="product-image" /> */}
                </Col>
                <Col className="cart-item-col-2">
                    <p className="cart-item-type"> {product.type} </p>
                    <p className="cart-item-name"> {product.name} </p>
                    <p className="cart-item-color" style={{ backgroundColor: product.color }}></p>
                </Col>
            </Row>
        </Container>
    )
}

