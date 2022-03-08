import React from 'react';
import ProductCard from './ProductCard';

import "./assets/style/product-card-container.css";

export default function ProductCardContainer(props) {
    return (
        <div className="best-product" id="best-product">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}
