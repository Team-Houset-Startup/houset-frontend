import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
// import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import NavigationBar from "../Components/NavigationBar";
import ProductCardContainer from "./ProductCardContainer";
// import RoomCardContainer from "./RoomCardContainer";
// import SelectionRoomContainer from "./SelectionRoomContainer";
import CategorySidebar from "./CategorySidebar";
import Search from "./Search";
// import PageListNavigator from "./PageListNavigator";
import Footer from "../Components/Footer";
import StartDesignBanner from "./StartDesignBanner";
import SelectionRoomCard from "./SelectionRoomCard";

import "./assets/style/product.css";
import products from "../db/furniture.json";

import dapur1 from "../assets/image/dapur-1.png";
import dapur2 from "../assets/image/dapur-2.png";
import kamar from "../assets/image/kamar.png";
import ruangtamu from "../assets/image/ruang-tamu.png";

function Product({ variant }) {
    // initiate pagination system

    const [currentProducts, setCurrentProducts] = useState(products);
    const [pageCount, setPageCount] = useState(0);
    const [productOffset, setProductOffset] = useState(0);
    const productsPerPage = 8;

    useEffect(() => {
        const endOffset = productOffset + productsPerPage;
        setCurrentProducts(products.slice(productOffset, endOffset));
        setPageCount(Math.ceil(products.length / productsPerPage));
    }, [productOffset, productsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * productsPerPage) % products.length;
        setProductOffset(newOffset);
    };

    // let CardContainer = (<></>)
    // if (props.variant === "furniture") {
    //     CardContainer = <ProductCardContainer products={currentProducts} />
    // } else if (props.variant === "room") {
    //     CardContainer = <ProductCardContainer products={currentProducts} />
    // }
    return (
        <>
            <NavigationBar />
            <Container fluid className="product-page">
                <div className="section1">
                    <StartDesignBanner />
                </div>

                <section className="section2">
                    {/* <SelectionRoomContainer /> */}
                    {/* {pictures.map((picture, index) => (
                               <SelectionRoomCard picture={picture} /> 
                            ))} */}
                    <ScrollMenu>
                        <SelectionRoomCard picture={dapur1} name="Ruang Dapur" />
                        <SelectionRoomCard picture={kamar} name="Kamar Tidur" />
                        <SelectionRoomCard picture={dapur2} name="Ruang Dapur" />
                        <SelectionRoomCard picture={ruangtamu} name="Ruang Keluarga" />
                        <SelectionRoomCard picture={dapur1} name="Ruang Dapur" />
                        <SelectionRoomCard picture={kamar} name="Kamar Tidur" />
                        <SelectionRoomCard picture={dapur2} name="Ruang Dapur" />
                        <SelectionRoomCard picture={ruangtamu} name="Ruang Keluarga" />
                    </ScrollMenu>

                    <Search />

                </section>

                <Container className="product-list-preview">
                    <Row>
                        <Col xl={{ span: "2" }}> <CategorySidebar /> </Col>

                        <Col xl={{ span: "10" }}> <ProductCardContainer variant={variant} products={currentProducts} /> </Col>
                        {/* {CardContainer} */}
                    </Row>

                    <Row>
                        <Col>
                            <ReactPaginate
                                breaklabel="..."
                                nextLabel=">"
                                previousLabel="<"
                                onPageChange={handlePageClick}
                                // pageRangeDisplayed={16}
                                pageCount={pageCount}
                                renderOnZeroPageCount={null}
                                containerClassName="product-pagination"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    )
}

export default Product