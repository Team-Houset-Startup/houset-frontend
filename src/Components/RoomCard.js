import React, { useContext } from 'react'
import RoomPreview from "./assets/image/room.png";

import "./assets/style/room-card.css";
import ModalContext from '../context/modal';


const LikeIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.031 3.75C14.486 3.74962 14.9366 3.84008 15.3562 4.01609C15.7758 4.1921 16.1561 4.45011 16.4747 4.775C17.1312 5.44149 17.4992 6.33947 17.4992 7.275C17.4992 8.21053 17.1312 9.10851 16.4747 9.775L9.99974 16.3313L3.52474 9.775C2.86823 9.10851 2.50023 8.21053 2.50023 7.275C2.50023 6.33947 2.86823 5.44149 3.52474 4.775C3.84354 4.45035 4.22385 4.19247 4.64343 4.01643C5.06302 3.8404 5.51347 3.74973 5.96849 3.74973C6.4235 3.74973 6.87396 3.8404 7.29354 4.01643C7.71313 4.19247 8.09343 4.45035 8.41224 4.775L9.99974 6.4L11.581 4.7875C11.8986 4.45874 12.2793 4.19741 12.7003 4.01915C13.1212 3.84089 13.5738 3.74935 14.031 3.75M14.031 2.5C13.4095 2.49947 12.7942 2.62304 12.2211 2.86344C11.648 3.10384 11.1286 3.45625 10.6935 3.9L9.99974 4.6L9.30599 3.9C8.87033 3.45705 8.35086 3.10526 7.77785 2.86512C7.20485 2.62498 6.58978 2.50131 5.96849 2.50131C5.3472 2.50131 4.73212 2.62498 4.15912 2.86512C3.58612 3.10526 3.06664 3.45705 2.63099 3.9C1.74466 4.80227 1.24805 6.01648 1.24805 7.28125C1.24805 8.54603 1.74466 9.76024 2.63099 10.6625L9.99974 18.125L17.3685 10.6625C18.2548 9.76024 18.7514 8.54603 18.7514 7.28125C18.7514 6.01648 18.2548 4.80227 17.3685 3.9C16.9329 3.45682 16.4135 3.10478 15.8405 2.86441C15.2675 2.62405 14.6524 2.50017 14.031 2.5V2.5Z"
        fill="black"
      />
    </svg>
  );
};


export default function RoomCard({ room }) {
  // function to return the room card of the room page
  const {openRoomModal} = useContext(ModalContext)
  
  const showModal = (room) => {
    openRoomModal(room)
  };

  return (
    <>
      <div className="product-room-item" onClick={() => showModal(room)}>
        <div className="room-pict">
          <img
            src={RoomPreview}
            alt={room !== undefined ? room.name : ""}
          />
        </div>
        <div className="room-card-info">
          <div className="room-desc">
            <p className="room-type">
              {room !== undefined ? room.type : ""}
            </p>
            <p className="room-name">
              {room !== undefined ? room.name : ""}
            </p>
          </div>
          <div className="room-action">
            {/* love icon fav status*/}
            <LikeIcon />
          </div>
        </div>
      </div>
    </>
  );
}