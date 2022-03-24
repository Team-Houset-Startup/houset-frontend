import React from 'react'
import { Row, Col, Container, Navbar } from 'react-bootstrap'

import LogoCanvas from './assets/image/logo-houset-canvas.png'
import "./assets/style/navbar-canvas.css"

const DownloadIcon = () => {
    return (
        <div className="canvas-download-icon">
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.59 6H10V1C10 0.45 9.55 0 9 0H5C4.45 0 4 0.45 4 1V6H2.41C1.52 6 1.07 7.08 1.7 7.71L6.29 12.3C6.68 12.69 7.31 12.69 7.7 12.3L12.29 7.71C12.92 7.08 12.48 6 11.59 6ZM0 16C0 16.55 0.45 17 1 17H13C13.55 17 14 16.55 14 16C14 15.45 13.55 15 13 15H1C0.45 15 0 15.45 0 16Z" fill="white" />
            </svg>
        </div>
    )
}

export default function NavbarCanvas() {
    return (
        <Navbar>
            <Container fluid className="navbar-canvas">
                <Navbar.Collapse>
                    <img src={LogoCanvas} alt="logo" className="navbar-canvas-logo" />
                    <button className="navbar-button"> Home </button>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-center">
                    <input className="canvas-name" placeholder="Untitled Design" />
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <DownloadIcon />
                    <button className="navbar-button"> Share </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <nav className="navbar-canvas">
        //     <img src={LogoCanvas} alt="logo" className="navbar-canvas-logo d-flex justify-content-md-center" />
        //     <button className="navbar-button"> Home </button>
        //     <input className="canvas-name" placeholder="Untitled Design" />
        //     <DownloadIcon className="canvas-download" />
        //     <button className="navbar-button"> Share </button>
        // </nav>
    )
}
