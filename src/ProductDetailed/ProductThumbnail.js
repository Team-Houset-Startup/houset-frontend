import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "./assets/style/product-thumbnail.scss"
import ProductThreeD from './ProductThreeD';

const assetFbx = require('./assets/3d/sofa-2.fbx');


function MakeThumbnail({ thumbnails }) {
    const [nowPreview, setNowPreview] = useState(thumbnails[0]);
    console.log(nowPreview);

    return (
        <>
            <Col className="thumbnail-360">
                <img src={nowPreview || thumbnails[0]} alt="thumbnail" />
                {/* <ProductThreeD asset={assetFbx} /> */}
            </Col>
            <Col className="thumbnail-list">
                {thumbnails.map((thumbnail) =>
                    <Row className="thumbnail-list-item">
                        <img src={thumbnail} alt="product-mini-thumbnail" onClick={() => setNowPreview(thumbnail)} />
                    </Row>
                )}
            </Col>
        </>
    )
}

export default function ProductThumbnail({ images }) {
    const baseImage = "https://houset.my.id/storage/app/public/";
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        if (images !== undefined) {
            setThumbnails(
                images.map((image) => baseImage + image.location)
            );
        }
    }, [images])

    return (
        <Container className="thumbnail-container">
            <Row>
                <MakeThumbnail thumbnails={thumbnails} />
            </Row>
        </Container>
    )
}
