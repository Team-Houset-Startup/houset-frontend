import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RoomPreview from "./assets/image/room.png";
import RoomModals from '../Product/RoomDetailed/RoomDetailed';

import Button from '../Components/Button';
import { Modal } from 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
// import RoomPhoto from "../RoomModals/assets/image/room-photo.png";

import "./assets/style/room-card.css";

// const LikeIcon = () => {
//     return (
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//             <rect width="20" height="20" fill="url(#pattern0)" />
//             <defs>
//                 <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
//                     <use xlink:href="#image0_3433_6028" transform="scale(0.0333333)" />
//                 </pattern>
//                 <image id="image0_3433_6028" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACAklEQVRIie3Vv2sTcRjH8fdz6R1SamszFCw0CbRZXMUlon9A0c0OBRcR7GKQKoLgJigIQYqLQsXJOHQoKAiOYntBEMFBKtgIBnHxxyWtrUjS5HEwYC7m6+Vibin9LAf3PDyv73257x3sZbdHTIViZmjMwcmq6AkgDdRA1xVrqf5TFydflTcA3h8eHYnt45ygMyBpwAbeicoTO1a9fXBl60vXcCkTP4XofWC/YV2fGqKnASyVPDBu6NtU9EzKrSwHwk10ybSollSbVyegr6HoTDvuG17MDI3ZYhcxP2lvETYcqaVbt91qrTs42b6jAMpIteGcb73lgxE92Xf0j+6b7YMVJqODmTLCEUfNsOhaVKqAb7YPFpVHUcEKj41wVWv3gB8RuNu2vbNohKcKW59Bcn1nRXLjz75/NcIA1WHvBvC6j+wbqz5486+1dOosHYsfoqEvgcH/RLe1bh1Jvfj2tr3Q8TglV7w1lDnajkDIqMJcJ9QIAyQL5QfA1d5ZrqTcct5UDvoDUcrEFxC9EE6VhaTrzf+rI/DLlSh48yp6q2sScgnXuxjUFwgLaGq1ckmF612w1xJu+bJ08W4EbnVrPhyNnxX0LjDQVqqLkk0Uyne6nRUK/o2PTgvkgQPNWxVLZHZi1XsaZk5oGODj8eF0oz7wEBArtjM78XxzvZc5e9nd+QXk9aGvl1GcIgAAAABJRU5ErkJggg==" />
//             </defs>
//         </svg>
//     )
// }

export default function RoomCard() {
    const [showRoom, setShowRoom] = useState(false);
    const [show, setShow] = useState(false);

    function handleModal() {
        setShowRoom(true);
    }

    return (
        <>
        
        <div className="product-item">
            {/* <button className="room-modals-btn" onClick={() => {this.handleModal()}}> */}
                <div className="room-pict"> <img src={RoomPreview} alt="" /> </div>
                <p className="room-type"> Shabby Chic </p>
                <p className="room-name"> Sweet Rosie </p>
                {/* <LikeIcon /> */}
            {/* </button> */}
        </div>
        
        {/* <RoomModals showRoom={showRoom} /> */}
        {/* <Modal show={showRoom}>
            <Modal.Header> Modal head </Modal.Header>
            <Modal.Body>
                <Container fluid className="room-container">
                    <Row>
                        <Col>
                            <p> Ruang Keluarga </p>
                            <p> Rustic Boho </p>
                            <p> Rp 60.000 </p>
                            <p> Desain ruang keluarga minimalis modern dengan detail serta fungsi yang dipikirkan secara matang sehingga terlihat penuh gaya dan fungsional. Selain berperan sebagai ruang keluarga, area ini juga menjadi ruang tamu dan ruang untuk bersantai. </p>
                            <Row>
                                <Button type="secondary-button" text="Mulai Design" isDisabled={true} />
                            </Row>
                        </Col>
                        <Col>
                            <img src={RoomPhoto} alt="room-photo" className="room-photo" />
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal> */}
        </>
    )
}
