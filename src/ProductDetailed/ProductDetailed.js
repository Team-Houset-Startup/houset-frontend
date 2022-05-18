import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import RecommendationProduct from '../Components/RecommendationProduct';
import ProductLastSeen from '../Components/ProductLastSeen';
import ItemDescription from '../Components/ItemDescription';
import Button from '../Components/Button';

import ProductThumbnail from './ProductThumbnail';

import "./assets/style/product-detailed.css";

const Minus = () => {
    return (
        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2H1C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H13C13.55 0 14 0.45 14 1C14 1.55 13.55 2 13 2Z" fill="#055053" />
        </svg>
    );
}

const Plus = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="#055053" />
        </svg>
    )
}

// function ButtonDidClick(e) {
//     e.preventDefault();
//     let navigate = {useNavigate};
//     navigate("/cart");
// }

const ProductContainerLeft = () => {
    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    // const history = useHistory();
    const ButtonDidClick = () => {
        navigate("/cart");
        // history.push("/cart");
    }

    return (
        <div className="product-container-left">
            {/* bagian panel sebelah kiri untuk yang berwarna hijau */}

            <div className="product-info">
                <p className="product-info-category"> Kursi Tamu </p>
                <p className="product-info-name"> Netstudio Kursi </p>
                <p className="product-info-review"> 199 Ulasan <span> star here </span> </p>
            </div>

            <div className="product-price">
                <p className="product-price-normal"> Rp 7.500.000 </p>
                <p className="product-price-disc"> Rp 5.099.000 </p>
            </div>

            <div className="product-type">
                <div className="product-type-color">
                    <p> Warna </p>
                    <span> <button> abu </button> <button> coklat </button> </span>
                </div>
                <div className="product-type-qty">
                    <p> Jumlah </p>
                    <span>
                        <button className="button-add" onClick={() => setQty(qty - 1)} disabled={qty == 1}> {<Minus />} </button>
                        <span> {qty} </span>
                        <button className="button-sub" onClick={() => setQty(qty + 1)}> {<Plus />} </button>
                    </span>
                </div>
            </div>

            <div className="buy-product">
                <Link to="/cart"> <Button text="Masukkan Keranjang" type="secondary-button" onClick={ButtonDidClick} /> </Link>
                {/* <button onClick={() => {history.push('/cart')}}>ss </button> */}
                <Link to="/"> <Button text="Beli Sekarang" type="primary-button" /> </Link>
            </div>
        </div>
    )
}

export default function ProductDetailed() {

    return (
        <>
            <NavigationBar />

            <Container fluid>
                <Row>
                    <Col xl={5}>
                        <ProductContainerLeft />
                    </Col>
                    <Col xl={7} >
                        <ProductThumbnail />
                    </Col>
                </Row>

                <Row xl={12}>
                    <Col xl={10} className="product-desc-col">
                        <ItemDescription />
                    </Col>
                </Row>

                <hr/>
                {/* error below */}
                <RecommendationProduct count="4" />

                {/* <ProductLastSeen /> */}
            </Container>

            <Footer />
        </>
    )
}
