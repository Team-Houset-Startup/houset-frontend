import React from 'react';
import { Link } from 'react-router-dom';
import KursiPreview from "./assets/image/kursi.png";

import "./assets/style/product-card.css";

export default function ProductCard() {
    return (
        <div className="product-item">
            <Link to="/product/product-page">
                <div className="product-pict"> <img src={KursiPreview} alt="" /> </div>
                <p className="item-type"> Kursi Tamu </p>
                <p className="item-name"> Kursi Stacy </p>
                <p className="item-price"> Rp 1.500.000 </p>
                <p className="item-price-discounted"> Rp 1.099.000 </p>
            </Link>
        </div>
    )
}
