import React, { useState } from 'react';
import RoomCard from '../Components/RoomCard';
import RoomModals from '../RoomDetailed/RoomDetailed';

import "./assets/style/product-card-container.css";

export default function ProductCardContainer(props) {
    const [showRoom, setShowRoom] = useState(false);
    function handleModal() {
        setShowRoom(true);
    }

    return (
        <>
            <div className="best-product" id="best-product">
                {/* <button className="room-modals-btn" onClick={() => { this.handleModal() }}> <RoomCard /> </button> */}
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
            </div>

            {/* <RoomModals showRoom = {showRoom}/> */}
        </>
    )
}
