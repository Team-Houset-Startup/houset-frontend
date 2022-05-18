import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import KursiPreview from "./assets/image/kursi.png";

import "./assets/style/product-card.css";

export default function FurnitureCard( {product} ) {
    // console.log(product);
    return (
        <div className="product-item">
            <Link to="/product/product-page">
                <div className="product-pict"> <img src={product.image} alt="" /> </div>
                <p className="item-type"> {product.type} </p>
                <p className="item-name"> {product.name} </p>
                <p className="item-price"> {product.price} </p>
                <p className="item-price-discounted"> {product.priceDiscounted} </p>
            </Link>
        </div>
    )
}

// FurnitureCard.propTypes = {
//     image: propTypes.string,
//     type: propTypes.string,
//     name: propTypes.string,
//     price: propTypes.string,
//     priceDiscounted: propTypes.string
// };