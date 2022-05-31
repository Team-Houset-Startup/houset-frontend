import React from 'react';
import RoomPreview from "./assets/image/room-scrollable.png";
import { Link } from 'react-router-dom';

import "./assets/style/selection-room-card.css";

// Elemen per ruangan yang dapat discroll

export default function SelectionRoomCard(props) {
    return (
        <div className="selection-card-scrollable">
        <Link to="room-page">
            <img src={RoomPreview} alt="" />
            <p> Tradisional </p>
        </Link>
        </div>
    )
}
