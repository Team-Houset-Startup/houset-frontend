import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { useState } from "react";
// import { Tab, Tabs } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

// import RecommendationProduct from "../Components/RecommendationProduct";
// import ProductLastSeen from "../Components/ProductLastSeen";
// import ItemDescription from "../Components/ItemDescription";
import Button from "../Components/Button";

import ReactModal from "react-modal";
import ModalContext from "../context/modal";

export default function RoomProductModal({ product }) {
  const { roomModalIsOpen, closeRoomModal } = useContext(ModalContext);

  return (
    <ReactModal
      isOpen={roomModalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeRoomModal}
    >
      <Container fluid>
        <Row>
          <Col xl={5}>
            {product === undefined ? (
              ""
            ) : (
              <ProductContainerLeft product={product} />
            )}
          </Col>
          <Col xl={7}>{/* <ProductThumbnail /> */}</Col>
        </Row>

        <Row xl={12}>
          <Col xl={10} className="product-desc-col">
            {/* <ItemDescription product={product} /> */}
          </Col>
        </Row>
      </Container>
    </ReactModal>
  );
}

const ProductContainerLeft = ({ product }) => {
  //   const navigate = useNavigate();
  // const history = useHistory();
  const ButtonDidClick = () => {
    // navigate("/canvas");
    // history.push("/cart");
  };

  return (
    <div className="product-container-left">
      {/* bagian panel sebelah kiri untuk yang berwarna hijau */}

      {/* room */}
      {/* product name */}
      {/* product details */}
      {/*  */}

      <div className="product-info">
        <p className="product-info-room">Ruang Keluarga</p>
        <p className="product-info-name">
          {product.name}
        </p>
        <p className="product-info-description">
          Desain ruang keluarga minimalis modern dengan detail serta fungsi yang
          dipikirkan secara matang sehingga terlihat penuh gaya dan fungsional.
          Selain berperan sebagai ruang keluarga, area ini juga menjadi ruang
          tamu dan ruang untuk bersantai.
        </p>
      </div>

      <div className="start-design">
        {/* <Link to="/canvas">
          <Button
            text="Mulai Design"
            type="primary-button"
            onClick={ButtonDidClick}
          />
        </Link> */}
      </div>
    </div>
  );
};
