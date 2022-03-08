import React from 'react';
import SelectionRoomCard from './SelectionRoomCard';

import "./assets/style/selection-room-container.css";

// Container untuk quick select ruangan 
// Preview dapat discroll kesamping
export default function SelectionRoomContainer() {
    return (
        <div className="selection-room-container">
            <p className="find-fav-text"> Temukan tema ruangan favoritmu disini </p>
            <div className="fav-room d-flex justify-content-center" >
                <div className="container-for-scrollable ">
                    <div className="container-scrollable">
                        <SelectionRoomCard roomId="1" />
                        <SelectionRoomCard />
                        <SelectionRoomCard />
                        <SelectionRoomCard />
                        <SelectionRoomCard />
                        <SelectionRoomCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
