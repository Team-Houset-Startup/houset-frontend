import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll'
import HousetLogo from "../assets/image/houset-logo2.png";

export default function HomepageNavbar() {
    return (
        <Container fluid className="navbar-nav">
            <Row className="navbar-div">
                <Col>
                    <Link to="/"> <img src={HousetLogo} className="houset-logo" alt="image not found" /> </Link>
                </Col>
                <Col>
                    <ul className="navbar-ul">
                        <li> <Link to="home"> Beranda </Link> </li>
                        <li> <Link to="offers"> Penawaran </Link> </li>
                        <li> <Link to="portofolio"> Portofolio </Link> </li>
                        <li> <Link to="contact"> Kontak </Link> </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
