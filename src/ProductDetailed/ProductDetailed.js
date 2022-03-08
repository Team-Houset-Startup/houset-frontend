import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import "./assets/style/room-page.css";
import Recommendation from './Recommendation';

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
        <div className="">
            <h4 className="product-desc-title"> Deskripsi Produk </h4>
            <p className="product-desc-text"> Nestudio Kursi dapat membuat ruangan Anda tampil cantik. Kerangkanya yang terbuat dari kayu serta desain yang unik dan warna cerah akan memberikan aksen pada ruangan tanpa perlu banyak dekorasi. Letakkan kursi ini di dekat jendela atau berhimpitan dengan tembok dan lihat bagaimana ruangan akan terasa lebih hidup! Bantalan dengan busa empuk dan lapisan per membuat Anda tetap nyaman meski telah duduk berjam-jam. Finishing produk menggunakan veneer berbahan natural sehingga mempertahankan keindahan tekstur serat alami. Didesain ergonomis dengan kemiringan sudut (untuk sofa & kursi) dan dimensi yang telah disesuaikan dengan tinggi dan postur tubuh konsumen Asia.Telah melalui proses pengujian dan tersertifikasi sehingga kualitas dan ketahanannya terjamin.</p>
        </div>
    )
}

export default function ProductDetailed() {
    const [qty, setQty] = useState(1);
    return (
        <>
            <NavigationBar />
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
                            <button className="button-add" onClick={() => setQty(qty - 1)}> {<Minus />} </button>
                            <span> {qty} </span>
                            <button className="button-sub" onClick={() => setQty(qty + 1)}> {<Plus />} </button>
                        </span>
                    </div>
                </div>

                <div className="buy-product">
                    <button className="add-to-cart-button"> Masukkan Keranjang </button>
                    <button className="buy-now-button"> Beli Sekarang </button>
                </div>
            </div>

            <div className="product-description">
                <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3">
                    <Tab className="product-desc-tab" eventKey="description" title="Deskripsi">
                        <Description />
                    </Tab>
                    <Tab className="product-desc-tab" eventKey="detail" title="Detail dan Spesifikasi">
                        <Description />
                    </Tab>
                    <Tab className="product-desc-tab" eventKey="gallery" title="Gallery">
                        <Description />
                    </Tab>
                    <Tab className="product-desc-tab" eventKey="review" title="Ulasan">
                        <Description />
                    </Tab>
                </Tabs>
            </div>

            <hr /> 

            <Recommendation />

            <Footer />
        </>
    )
}
