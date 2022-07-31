import React, { useContext, useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import ModalContext from '../context/modal';
import KursiPreview from "./assets/image/kursi.png";

import "./assets/style/product-card.css";

export default function FurnitureCard( {product} ) {
    const {closeAllModal} = useContext(ModalContext)
    const baseImage = "https://houset.my.id/storage/app/public/";
    const [productImage, setProductImage] = useState("");

    useEffect(() => {
        // try {
        //     setProductImage(product.image_gallery[0].location);
        // } catch(err) {
        //     if (err?.response?.status === 404) {
        //         setProductImage("Image not found");
        //         console.log("Not found");
        //     }
        // }
        if (Object.keys(product).length !== 0 && product.image_gallery.length !== 0) {
            setProductImage(product.image_gallery[0].location);
        }
    }, [])

    return (
        <div className="product-item" onClick={closeAllModal}>
            <Link to={`/product/${product.id}`} >
                <div className="product-pict"> <img src={baseImage + productImage} alt="Image not found" /> </div>
                <p className="item-type"> {product.type} </p>
                <p className="item-name"> {product.name} </p>
                <p className="item-price-discounted"> Rp {product.price} </p>
                {/* <p className="item-price-discounted"> {product.priceDiscounted} </p> */}
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