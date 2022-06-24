import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import RoomPreview from "./assets/image/room.png";
import RoomModals from '../RoomDetailed/RoomDetailed';

import Button from '../Components/Button';
import { Modal } from 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
// import RoomPhoto from "../RoomModals/assets/image/room-photo.png";

import "./assets/style/room-card.css";
import RoomProductModal from '../modals/RoomProductModal';
import ModalContext from '../context/modal';

export default function RoomCard({ product,i }) {
  const {openRoomModal} = useContext(ModalContext)
  
  const showModal = (product) => {
    openRoomModal(product)
  };

  return (
    <>
      <div className="product-item" onClick={()=>showModal(product)}>
        <div className="room-pict">
          <img src={RoomPreview} alt={product.name} />
        </div>
        <p className="room-type">{product.type}</p>
        <p className="room-name">{product.name}</p>
        {/* LikeIcon */}
      </div>
    </>
  );
}


// product : {
//     "id": 8,
//     "type": "Lemari Pajangan",
//     "name": "Lemari Border 5px",
//     "price": "Rp. 3.200.000",
//     "priceDiscounted": "Rp 2.999.000",
//     "image": "https://lh3.google.com/u/0/d/1zuufOZ1HhVecfk4IGj8TBO_xn_z6541k=w1297-h892-iv1",
//     "description": "Kursi komputer"
// }
