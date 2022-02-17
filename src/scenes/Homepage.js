import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavigationBar from '../parts/NavigationBar';
import Footer from '../parts/Footer';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductLists from '../parts/ProductLists';
import RoomLists from '../parts/RoomLists';

import SampleRoom from '../assets/image/sample-room.png'
import StepDesign from '../parts/StepDesign';

import "../assets/style/homepage.css";

function Homepage() {
    return (
        <>
            <NavigationBar />

            <header>
                
                <div id="nav-bar"></div>
                <div className="base-background">
                    <div className="container-text">
                        <p className="subtitle1">Pilihan terbaik untuk ruangan </p>
                        <h1 className="title-text">New Furniture Collection Shabby Chic</h1>
                        <p className="subtitle2">
                            Manjakan tampilan ruangan mu dengan membeli kursi
                            dari edisi terbaru Shabby Chic yang tentunya akan menambah desain manis dan elegant.
                        </p>
                        <a href="#"><button className="buy-now">Belanja Sekarang</button></a>
                    </div>
                    
                </div>
            </header>

            <section className="home-section1">
                <div className="home-sub-section1">
                    <div className="start-3d">
                        <h2> Mulai dekorasi dengan 3D </h2>
                        <p>
                            Inovasi teknologi 3D Modeling kini telah hadir di Houset untuk memudahkan visualisasi setiap interior pada ruangan dan menyajikan kesan lebih nyata.
                        </p>
                    </div>
                    <img src={SampleRoom} alt="" />
                </div>

                <div className="home-sub-section2">
                    <p> Step untuk mendesain ruangan </p>
                    <div className="step-design">
                        <StepDesign />
                    </div>
                </div>


            </section>

            <section className="home-section2">
                <ProductLists />
                {/* <hr style="border: 1px solid #E4E7EC;"> </hr> */}
                <RoomLists />
            </section>

            <Footer />
        </>
    )
}



export default Homepage;