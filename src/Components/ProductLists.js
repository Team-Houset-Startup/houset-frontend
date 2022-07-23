import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'
import FurnitureCard from './FurnitureCard';
import LinkSeeMore from './LinkSeeMore';

import products from '../db/furniture.json';

import "./assets/style/product-list.css"

const ProductList = (count) => {
    let Products = [];
    products?.slice(0, count)?.forEach((product) => {
        Products.push(
            <FurnitureCard product={product} key={product.id}/>
        )
    })
    return (
        Products
    )
};

export default function ProductLists() {
    // let product =
    // {
    //     type: "Kursi",
    //     name: "Kursi Kaki 3",
    //     price: "Rp. 1.100.000",
    //     priceDiscounted: "Rp. 1.000.000",
    //     image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    // };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: -10,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };

    return (
        <div>
            <LinkSeeMore title="Produk Terbaik" links="/furnitur" text="Lihat Semua" />
            <Carousel
                responsive={responsive}
                draggable={false}
                ssr
                partialVisible={true}
                // centerMode={true}
                className="product-list-carousel"
            >
                {ProductList(8)}
            </Carousel>
        </div>
    )
}
