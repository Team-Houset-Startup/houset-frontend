import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal'
// import { Modal } from 'bootstrap';
import { Container, Row, Col, Tabs } from 'react-bootstrap';
import Button from '../Components/Button';

import RoomPhoto from "./assets/image/room-photo.png";

import "./assets/style/room-detailed.css"
import { Tab } from 'bootstrap';
import RecommendationRoom from '../Components/RecommendationRoom';
import RoomLastSeen from '../Components/RoomLastSeen';
import ProductRelated from '../Components/ProductRelated';


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


export default function RoomDetailed(props) {
    // const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    return (
        <Container fluid className="room-container">
            <Row>
                <Col className="room-col-left">
                    <p className="room-detail-type"> Ruang Keluarga </p>
                    <p className="room-detail-name"> Rustic Boho </p>
                    {/* <p className="room-detail-price"> Rp 60.000 </p> */}
                    <p className="room-detail-desc"> Desain ruang keluarga minimalis modern dengan detail serta fungsi yang dipikirkan secara matang sehingga terlihat penuh gaya dan fungsional. Selain berperan sebagai ruang keluarga, area ini juga menjadi ruang tamu dan ruang untuk bersantai. </p>
                    <Row className="room-start-design">
                        <Button type="primary-button" text="Mulai Design" />
                    </Row>
                </Col>
                <Col>
                    <img src={RoomPhoto} alt="room-photo" className="room-photo" />
                </Col>
            </Row>

            <Row>
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
            </Row>

            <Row>
                <RecommendationRoom count={1} />
            </Row>

            <Row>
                <ProductRelated count={1} />
            </Row>
            
            <Row>
                <RoomLastSeen />
            </Row>
        </Container>
    )
}
