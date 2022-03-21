import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import Recommendation from '../Components/Recommendation';
import ProductLastSeen from '../Components/ProductLastSeen';
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

const Description = () => {
    return (
        <div>
            <h4 className="product-tab-subtitle"> Deskripsi Produk </h4>
            <p className="product-tab-information"> Nestudio Kursi dapat membuat ruangan Anda tampil cantik. Kerangkanya yang terbuat dari kayu serta desain yang unik dan warna cerah akan memberikan aksen pada ruangan tanpa perlu banyak dekorasi. Letakkan kursi ini di dekat jendela atau berhimpitan dengan tembok dan lihat bagaimana ruangan akan terasa lebih hidup! Bantalan dengan busa empuk dan lapisan per membuat Anda tetap nyaman meski telah duduk berjam-jam. Finishing produk menggunakan veneer berbahan natural sehingga mempertahankan keindahan tekstur serat alami. Didesain ergonomis dengan kemiringan sudut (untuk sofa & kursi) dan dimensi yang telah disesuaikan dengan tinggi dan postur tubuh konsumen Asia.Telah melalui proses pengujian dan tersertifikasi sehingga kualitas dan ketahanannya terjamin.</p>
        </div>
    )
}

const DetailSpecs = () => {
    const showInfo = () => {
        var info = [];
        for (var i = 0; i < 6; i++) {
            info.push(
                <Row>
                    <Col>
                        Brand
                    </Col>
                    <Col>
                        Nestudio
                    </Col>
                </Row>
            )
        }
        return info;
    }

    return (
        <Container>
            <Row xs={1} sm={2}>
                <Col>
                    <p className="product-tab-subtitle"> Detail </p>
                    <Container className="product-tab-information">
                        {showInfo()}
                    </Container>
                </Col>
                <Col>
                    <p className="product-tab-subtitle"> Spesifikasi </p>
                    <Container className="product-tab-information">
                        <Row>
                            <Col>
                                Brand
                            </Col>
                            <Col>
                                Nestudio
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

const Gallery = () => {
    return (
        <Container>
            <p className="product-tab-subtitle"> Tampilan Produk </p>
        </Container>
    )
}

const Review = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p className="product-tab-subtitle"> Penilaian Produk </p>
                </Col>
                <Col>
                    <p className="product-tab-subtitle"> Ulasan Pelanggan </p>
                </Col>
            </Row>
        </Container>
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
            </Container>


            <div className="product-description">
                <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3">
                    <Tab className="product-desc-tab" eventKey="description" title="Deskripsi">
                        <Description />
                    </Tab>
                    <Tab className="product-desc-tab" eventKey="detail" title="Detail dan Spesifikasi">
                        <DetailSpecs />
                    </Tab>
                    <Tab className="product-desc-tab" eventKey="gallery" title="Gallery">
                        <Gallery />
                    </Tab>
                    <Tab className="product-desc-tab" eventKey="review" title="Ulasan">
                        <Review />
                    </Tab>
                </Tabs>
            </div>

            <hr />

            <Recommendation count="2"/>

            <ProductLastSeen />

            <Footer />
        </>
    )
}
