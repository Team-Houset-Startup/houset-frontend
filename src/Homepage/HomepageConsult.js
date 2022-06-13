import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import { animateScroll as scroll } from 'react-scroll'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Modal } from 'react-bootstrap';

import Button from "../Components/Button";
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import HomepageNavbar from './HomepageNavbar';
import PackageCard from '../Components/PackageCard';
import RoomCard from '../Components/RoomCard';
// import SelectionRoomCard from '../Product/SelectionRoomCard';
import BottomBanner from './BottomBanner';
import StepDesign from './StepDesign';

import ConsultOnline from './assets/image/svg/ConsultOnline';
import ReferenceDesign from "./assets/image/svg/ReferenceDesign"
import TipsInsight from "./assets/image/svg/TipsInsight"
import BestPrice from "./assets/image/svg/BestPrice"

import pictures from "../db/pictures.json";

import dapur1 from "../assets/image/dapur-1.png";
import dapur2 from "../assets/image/dapur-2.png";
import kamar from "../assets/image/kamar.png";
import ruangtamu from "../assets/image/ruang-tamu.png";

import "./assets/style/homepage-consult.css"
// Modal.setAppElement('#root');

export default function Homepage() {
    const [pictureModal, setPictureModal] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // const [showModal, setShowModal] = useState({
    //     show: false,
    //     picture: null,
    // });
    // const handleShow = (pict) => {
    //     setShowModal({
    //         show: true,
    //         picture: pict,
    //     });
    // }
    
    // const handleClose = () => {
    //     setShowModal({
    //         show: false,
    //         picture: null,
    //     });
    // }
    
    const SelectionRoomCard = ({ picture, name }) => {
        return (
            <div className="selection-card-scrollable">
                <button style={{ border: "none", background: "none" }} onClick={handleShow}>
                    {/* {console.log(picture.path)} */}
                    <img src={picture} alt="picture" />
                    <p> {name} </p>
                </button>
            </div>
        )
    }

    function PortofolioModal() {
        // const { show, picture } = showModal;
        return (
            <Modal
                show={showModal}
                onHide={handleClose}
            >
                <img src={dapur1} alt="dapur1" />
                {/* <button onClick={handleClose}>Close</button> */}
            </Modal>
        )
    }

    return (
        <>
            <HomepageNavbar />
            <Container fluid className="homepage-container" id="home">
                <Row className="homepage-banner">
                    <Col className="homepage-booking-button">
                        <a href="https://wa.me/6282218585101" target={"_blank"}> <Button type="primary-button" text="Booking Konsultasi" /> </a>
                        {/* <Button variant="primary">Primary</Button>{' '} */}
                    </Col>
                </Row>

                <Row>
                    <Col className="homepage-aboutus">
                        <Row>
                            <Col className="homepage-subtitle">
                                <p> Tentang Kami </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="homepage-long-detail" xl={{ span: "auto" }}>
                                <p> Houset merupakan startup yang bergerak di bidang desain interior dan furniture yang memudahkan masyarakat
                                    untuk berimajinasi dan mengaplikasikan ruangan sesuai dengan desain interior yang diinginkan dan juga memudahkan dalam menjual furniture secara online. Visi Houset sendiri adalah "Mewujudkan harapan dan kenyamanan masyarakat Indonesia".
                                    Cara Houset memberikan kemudahan adalah dengan menyediakan website yang menyediakan layanan konsultasi bagi pelanggan terkait dengan kustomisasi desain interior yang diinginkan pelanggan baik dari pemodelan 3D maupun
                                    pembuatan desain yang berbeda sesuai keinginan pelanggan. </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xl={"auto"} className="homepage-step-design">
                        <Row className="homepage-sd-part">
                            <p className="homepage-sd-title"> Step Konsultasi Desain Interior </p>
                            <StepDesign />
                        </Row>
                    </Col>
                </Row>

                <Row xl={12} className="homepage-whyus">
                    <Col>
                        <Row>
                            <Col className="homepage-subtitle"> <p> Mengapa Harus Kami? </p> </Col>
                        </Row>
                        <Row xl={12} className="homepage-superiority">
                            <Col xl={3} className="homepage-superiority-card">
                                <ConsultOnline />
                                <h3> Konsultasi Online </h3>
                                <p> Mendapatkan konsultasi langsung dengan spesialis desain interior. </p>
                            </Col>
                            <Col xl={3} className="homepage-superiority-card">
                                <ReferenceDesign />
                                <h3> Referensi Desain </h3>
                                <p> Mendapatkan referensi desain interior dan furniture yang cocok dengan ruangan client. </p>
                            </Col>
                            <Col xl={3} className="homepage-superiority-card">
                                <TipsInsight />
                                <h3> Tips and Insight </h3>
                                <p> Memberikan berbagai tips dan insight dalam menjawab permasalahan ruangan client. </p>
                            </Col>
                            <Col xl={3} className="homepage-superiority-card">
                                <BestPrice />
                                <h3> Harga Terbaik </h3>
                                <p> Memberikan penawaran harga pasti dalam paket konsultasi desain interior. </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <br id="offers" style={{ marginBottom: "30px" }} />

                <Row>
                    <Col>
                        <Row>
                            <Col className="homepage-subtitle">
                                <p> Penawaran Konsultasi Desain Interior </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="homepage-long-detail" xl={{ span: "auto" }}>
                                <p> Dengan berbagai paket kami, Anda dapat membayar apa yang Anda butuhkan dan meninggalkan apa yang tidak dibutuhkankan.
                                    Cari tahu paket apa yang terbaik untuk ruangan Anda </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row xl={12} className="homepage-package-group">
                    <Col>
                        <PackageCard type="standard" />
                    </Col>
                    <Col>
                        <PackageCard type="premium" />
                    </Col>
                    <Col>
                        <PackageCard type="exclusive" />
                    </Col>
                </Row>

                <br id="portofolio" style={{ marginBottom: "30px" }} />

                <Row>
                    <Col className="homepage-subtitle">
                        <p> Portofolio Houset </p>
                    </Col>

                    <Row className="homepage-portofolio-scrollable">
                        <ScrollMenu>
                            {/* {pictures.map((picture, index) => (
                               <SelectionRoomCard picture={picture} /> 
                            ))} */}
                            <SelectionRoomCard picture={dapur1} name="Ruang Dapur" />
                            <SelectionRoomCard picture={kamar} name="Kamar Tidur" />
                            <SelectionRoomCard picture={dapur2} name="Ruang Dapur" />
                            <SelectionRoomCard picture={ruangtamu} name="Ruang Keluarga" />
                            <SelectionRoomCard picture={dapur1} name="Ruang Dapur" />
                            <SelectionRoomCard picture={kamar} name="Kamar Tidur" />
                            <SelectionRoomCard picture={dapur2} name="Ruang Dapur" />
                            <SelectionRoomCard picture={ruangtamu} name="Ruang Keluarga" />
                        </ScrollMenu>
                    </Row>
                    {/* <SelectionRoomContainer /> */}
                </Row>

                {/* <Row>
                    <Col className="homepage-subtitle">
                        <p> Testimonials </p>
                    </Col>
                </Row> */}

                <br id="contact" style={{ marginBottom: "30px" }} />

                <Row>
                    <Col> <BottomBanner /> </Col>
                </Row>
            </Container >
            <Footer />
            <PortofolioModal />
            {/* {console.log(showModal)} */}
        </>
    )
}
