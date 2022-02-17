import React from 'react';
import RoomPreview from "../assets/image/room-scrollable.png";
import { Link } from 'react-router-dom';

// Elemen per ruangan yang dapat discroll

export default function SelectionRoomCard() {
    return (
        <Link to="/">
            <img src={RoomPreview} alt="" />
            <p> Tradisional </p>
        </Link>
    )
}
