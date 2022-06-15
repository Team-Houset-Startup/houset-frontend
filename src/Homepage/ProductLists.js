import React from 'react'
import Carousel from 'react-multi-carousel'
import { Container, Row, Col } from 'react-bootstrap'
import FurnitureCard from '../Components/FurnitureCard';

import "./assets/style/product-list.css"

export default function ProductLists() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };
    //   <div className="product-pict"> <img src={product.image} alt="" /> </div>
    //   <p className="item-type"> {product.type} </p>
    //   <p className="item-name"> {product.name} </p>
    //   <p className="item-price"> {product.price} </p>
    //   <p className="item-price-discounted"> {product.priceDiscounted} </p
    let product =
    {
        type: "Kursi",
        name: "Kursi Kaki 3",
        price: "Rp. 1.100.000",
        priceDiscounted: "Rp. 1.000.000",
        image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    };

    return (
        <Carousel
            responsive={responsive}
            ssr
            partialVisbile
            className="product-list-carousel"
        >
            <FurnitureCard product={product} />
            <FurnitureCard product={product} />
            <FurnitureCard product={product} />
            <FurnitureCard product={product} />
        </Carousel>
    )
}
