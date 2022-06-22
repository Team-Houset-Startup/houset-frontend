import React from 'react'
import Carousel from 'react-multi-carousel'
import FurnitureCard from './FurnitureCard';
import LinkSeeMore from './LinkSeeMore';

import "./assets/style/product-list.css"

export default function ProductLists() {
    let product =
    {
        type: "Kursi",
        name: "Kursi Kaki 3",
        price: "Rp. 1.100.000",
        priceDiscounted: "Rp. 1.000.000",
        image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    };
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            paritialVisibilityGutter: -10,
            slidesToSlide: 1,
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
                <FurnitureCard product={product} />
                <FurnitureCard product={product} />
                <FurnitureCard product={product} />
                <FurnitureCard product={product} />
                <FurnitureCard product={product} />
                <FurnitureCard product={product} />
                <FurnitureCard product={product} />
                <FurnitureCard product={product} />
            </Carousel>
        </div>
    )
}
