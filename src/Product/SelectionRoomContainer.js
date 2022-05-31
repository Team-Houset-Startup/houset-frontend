import React from 'react';
import SelectionRoomCard from './SelectionRoomCard';

import "./assets/style/selection-room-container.css";

// Container untuk quick select ruangan 
// Preview dapat discroll kesamping
export default function SelectionRoomContainer() {
    return (
        <div className="selection-room-container">
            <p className="selection-room-title"> Temukan tema ruangan favoritmu disini </p>
            <div className="selection-fav-room d-flex justify-content-center" >
                <div className="selection-scrollable-group ">
                    <SelectionRoomCard roomId="1" />
                    <SelectionRoomCard />
                    <SelectionRoomCard />
                    <SelectionRoomCard />
                    <SelectionRoomCard />
                    <SelectionRoomCard />
                </div>
            </div>
        </div>
    )
}
