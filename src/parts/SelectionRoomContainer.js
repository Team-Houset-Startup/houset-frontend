import React from 'react';
import SelectionRoomCard from '../elements/SelectionRoomCard';

// Container untuk quick select ruangan 
// Preview dapat discroll kesamping
export default function SelectionRoomContainer() {
    return (
        <div className="fav-room">
            <p className="find-fav-text"> Temukan tema ruangan favoritmu disini </p>
            <div className="container-for-scrollable">
                <div className="container-scrollable">
                    
                    <SelectionRoomCard />
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
