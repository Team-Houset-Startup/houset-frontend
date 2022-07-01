import React, { useContext } from "react";
import FurnitureCard from "../Components/FurnitureCard";
import RoomCard from "../Components/RoomCard";

import "./assets/style/product-card-container.css";

import FurnitureData from "../db/furniture.json";
import { Container, Row, Col } from "react-bootstrap";

import GetRoomDataContext from "../context/roomAPI";

export default function ProductCardContainer({ variant, products }) {
    const { rooms } = useContext(GetRoomDataContext);

    // Fetch furniture product from API
    // show it in a section of product card
    function buildProductList() {
        const productList = [];
        let tempList = [];
        let item = 0;
        products.forEach((product) => {
            item += 1;
            tempList.push(
                <Col className="product-card-item">
                    <FurnitureCard product={product} />
                </Col>,
            );
            if (item % 4 == 0) {
                productList.push(<Row>{tempList}</Row>);
                tempList = [];
            }
        });
        // return tempList;
        return productList;
    }

    return (
        <Container className="product-card-container">
            {variant === "furniture" ? (
                buildProductList()
            ) : (
                <Row>
                    <BuildProductListRoom rooms={rooms} />
                </Row>
            )}
        </Container>
    );
}
const BuildProductListRoom = ({ rooms }) => {
    return (
        <>
            {rooms.map((room) => (
                <Col className="product-card-item" key={room.id}>
                    <RoomCard room={room} />
                </Col>
            ))}
        </>
    );
};
