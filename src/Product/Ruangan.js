import React, { useState } from "react";
import Modal from 'react-modal'
// import { Link } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";
// import RoomCardContainer from "./RoomCardContainer";
import SelectionRoomContainer from "./SelectionRoomContainer";
import CategorySidebar from "./CategorySidebar";
import Search from "./Search";
import Footer from "../Components/Footer";
import StartDesignBanner from "./StartDesignBanner";
import RoomCard from "../Components/RoomCard";
// import RoomPhoto from "./assets/image/room-photo.png";
import RoomDetailed from "../RoomDetailed/RoomDetailed";
// import { Modal } from "bootstrap";
import "./assets/style/furniture.css";
import "./assets/style/product-card-container.css";
Modal.setAppElement('#root');
const modalStyle = {
    content: {
        margin: '40px auto 0 auto',
        width: '90%',
    },
};
function Ruangan() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const RoomCardContainer = () => {
        return (
            <div className="best-product" id="best-product">
                {/* <button className="room-modals-btn" onClick={() => { this.handleModal() }}> <RoomCard /> </button> */}
                <button className="room-modals-btn" onClick={handleShow}> <RoomCard /> </button>
                <button className="room-modals-btn" onClick={handleShow}> <RoomCard /> </button>
                <button className="room-modals-btn" onClick={handleShow}> <RoomCard /> </button>
                <button className="room-modals-btn" onClick={handleShow}> <RoomCard /> </button>
                <button className="room-modals-btn" onClick={handleShow}> <RoomCard /> </button>
                <button className="room-modals-btn" onClick={handleShow}> <RoomCard /> </button>
                <button className="room-modals-btn" onClick={handleShow}> <RoomCard /> </button>
                <button className="room-modals-btn" onClick={handleShow}> <RoomCard /> </button>
            </div>
        )
    }
    return (
        <>
            <div className="product-page">
                <NavigationBar />
                <section className="section1">
                    <StartDesignBanner />
                </section>
                <section className="section2">
                    <SelectionRoomContainer />
                    <Search />
                </section>
                <section className="section3">
                    <CategorySidebar />
                    <RoomCardContainer />
                </section>
                <Footer />
            </div>
            <div className="room-modals">
                <Modal
                    isOpen={showModal}
                    onRequestClose={handleClose}
                    style={modalStyle}
                >
                    <RoomDetailed showRoom={false} />
                </Modal>
            </div>
        </>
    )
}
export default Ruangan