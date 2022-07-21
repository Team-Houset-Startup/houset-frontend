import React, { useContext } from "react";
import FurnitureCard from "../Components/FurnitureCard";
import RoomCard from "../Components/RoomCard";

import "./assets/style/product-card-container.css";

import { Container, Row, Col } from "react-bootstrap";

import rooms from '../db/rooms.json';

import GetRoomDataContext from "../context/roomAPI";
import GetProductDataContext from "../context/ProductAPI";

export default function ProductCardContainer({ variant, products }) {
    // const { rooms } = useContext(GetRoomDataContext);
    // const { products } = useContext(GetProductDataContext);

    // Fetch furniture product from API
    // show it in a section of product card
    // function buildProductList() {
    //     const productList = [];
    //     let tempList = [];
    //     let item = 0;
    //     products.forEach((product) => {
    //         item += 1;
    //         tempList.push(
    //             <Col className="product-card-item" key={product.id} >
    //                 { variant === "furniture" ? <FurnitureCard product={product} /> : <RoomCard room={product} /> }
    //             </Col>
    //         );
    //         if (item % 4 == 0) {
    //             productList.push(<Row>{tempList}</Row>);
    //             tempList = [];
    //         }
    //     });
    //     // return tempList;
    //     return productList;
    // }

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

    const BuildProductList = ({ products }) => {
        return (
            <>
                {products.map((product) => (
                    <Col className="product-card-item" key={product.id}>
                        <FurnitureCard product={product} />
                    </Col>
                ))}
            </>
        );
    };

    return (
        <Container className="product-card-container">
            {variant === "furniture" ? (
                // buildProductList()
                <Row>
                    <BuildProductList products={products} />
                </Row>
            ) : (
                <Row>
                    <BuildProductListRoom rooms={rooms} />
                </Row>
            )}
            {/* {buildProductList} */}
        </Container>
    );
}
