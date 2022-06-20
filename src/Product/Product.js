import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "../Components/NavigationBar";
import ProductCardContainer from "./ProductCardContainer";
import SelectionRoomContainer from "./SelectionRoomContainer";
import CategorySidebar from "./CategorySidebar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

import "./assets/style/product.css";
import products from "../db/furniture.json";
import Search from "../Components/Search";

// import dapur1 from "../assets/image/dapur-1.png";
// import dapur2 from "../assets/image/dapur-2.png";
// import kamar from "../assets/image/kamar.png";
// import ruangtamu from "../assets/image/ruang-tamu.png";

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

    return (
        <>
            <NavigationBar />
            <Container fluid>
                <Row className="product-hero">
                    <Col className="product-hero-content">
                        <Row>
                            <p> Desain ruangan dengan <br /> kreasi mu sekarang juga! </p>
                        </Row>
                        
                        <Row className="product-hero-start">
                            <Button text="Mulai Design" type="secondary-button" toPage="/canvas" />
                        </Row>
                    </Col>
                </Row>

                <Row className="product-selection">
                    <SelectionRoomContainer />
                </Row>

                
                <Row className="product-list-search">
                    <Search placeHolder="Cari produk, kategori, atau ruangan" />
                    <ul className="product-list-quick">
                        <li> <button> Dekorasi </button> </li>
                        <li> <button> Peralatan Dapur </button> </li>
                        <li> <button> Perlengkapan Kamar Mandi </button> </li>
                        <li> <button> Perlengkapan Kantor </button> </li>
                        <li> <button> Aksesoris Penyimpanan </button> </li>
                        <li> <button> Aksesoris Kamar Anak </button> </li>
                        <li> <button> Boneka Bebek </button> </li>
                    </ul>
                </Row>

                <Row className="product-list-content">
                    <Col className="product-list-sidebar"> <CategorySidebar /> </Col>

                    <Col className="product-list-preview"> <ProductCardContainer variant={variant} products={currentProducts} /> </Col>
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
            <Footer />
        </>
    )
}

export default Product