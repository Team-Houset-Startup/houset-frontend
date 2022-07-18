import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Button from '../Components/Button';

import './assets/style/product-container-side.scss'

const Minus = () => {
    return (
        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 2H1C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H13C13.55 0 14 0.45 14 1C14 1.55 13.55 2 13 2Z"
                fill="#055053"
            />
        </svg>
    );
};

const Plus = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
                fill="#055053"
            />
        </svg>
    );
};

export default function ProductContainerSide({ product }) {
    {/* left side panel */ }
    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    const ButtonDidClick = () => {
        navigate("/cart");
    };

    function productColor(color) {
        // return colors?.map((color) =>
        return (
            <>
                <input
                    type="radio"
                    name="product-color-radio"
                    className="product-color-radio"
                    value={color}
                    key={color}
                    style={{ backgroundColor: color }}
                />
                <label>  </label>
            </>
        )
    }

    return (
        <Container className="product-container-side">
            <Row className="product-info">
                <p className="product-info-category"> {product.type} </p>
                <p className="product-info-name"> {product.name} </p>
                {/* <p className="product-info-review">
                    {product.reviewqty} Ulasan <span> star here </span>
                </p> */}
            </Row>

            <Row className="product-price">
                <p className="product-price-disc"> Rp {product.price} </p>
                <p className="product-price-disc">{product.priceDiscounted} </p>
            </Row>

            <Row className="product-type">
                <Row className="product-type-color">
                    <Col xl={{ span: "4" }}> Warna </Col>
                    <Col>
                        {productColor(product.color)}
                    </Col>
                </Row>

                <Row className="product-type-qty">
                    <Col xl={{ span: "4" }}> Jumlah </Col>
                    <Col>
                        <button className="button-add" onClick={() => setQty(qty - 1)} disabled={qty === 1}>
                            {<Minus />}
                        </button>
                        <span className="product-qty-val"> {qty} </span>
                        <button className="button-sub" onClick={() => setQty(qty + 1)}>
                            {<Plus />}
                        </button>
                    </Col>
                </Row>
            </Row>

            <Row className="product-checkout">
                <Col>
                    <Link to="/cart">
                        <Button text="Masukkan Keranjang" type="secondary-button" onClick={ButtonDidClick} />
                    </Link>
                </Col>
                {/* <button onClick={() => {history.push('/cart')}}>ss </button> */}
                <Col>
                    <Link to="/">
                        <Button text="Beli Sekarang" type="primary-button" />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
