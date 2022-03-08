import React from 'react';
import RoomCard from './RoomCard';

import "./assets/style/product-card-container.css";

export default function ProductCardContainer(props) {
    return (
        <div className="best-product" id="best-product">
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
        </div>
    )
}
