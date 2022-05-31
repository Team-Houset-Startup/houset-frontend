import React from 'react';
import RoomPreview from "./assets/image/room-scrollable.png";
import { Link } from 'react-router-dom';

import "./assets/style/selection-room-card.css";

// Elemen per ruangan yang dapat discroll

export default function SelectionRoomCard( {picture, name} ) {
    return (
        <div className="selection-card-scrollable">
            <Link to="room-page">
                {/* {console.log(picture.path)} */}
                <img src={picture} alt="" />
                <p> {name} </p>
            </Link>
        </div>
    )
}
