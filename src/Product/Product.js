import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "../Components/NavigationBar";
import ProductCardContainer from "./ProductCardContainer";
import SelectionRoomContainer from "./SelectionRoomContainer";
import CategorySidebar from "./CategorySidebar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

import "./assets/style/product.scss";
import Search from "../Components/Search";
import GetRoomDataContext from "../context/roomAPI";
import GetProductDataContext from "../context/ProductAPI";

// import dapur1 from "../assets/image/dapur-1.png";
// import dapur2 from "../assets/image/dapur-2.png";
// import kamar from "../assets/image/kamar.png";
// import ruangtamu from "../assets/image/ruang-tamu.png";

const prevPageIcon = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15C0 6.71573 6.71573 0 15 0V0C23.2843 0 30 6.71573 30 15V15C30 23.2843 23.2843 30 15 30V30C6.71573 30 0 23.2843 0 15V15Z" fill="white" />
            <path d="M17.7105 18.88L13.8305 15L17.7105 11.12C18.1005 10.73 18.1005 10.1 17.7105 9.70998C17.3205 9.31998 16.6905 9.31998 16.3005 9.70998L11.7105 14.3C11.3205 14.69 11.3205 15.32 11.7105 15.71L16.3005 20.3C16.6905 20.69 17.3205 20.69 17.7105 20.3C18.0905 19.91 18.1005 19.27 17.7105 18.88Z" fill="#98A2B3" />
            <path d="M17.7105 18.88L13.8305 15L17.7105 11.12C18.1005 10.73 18.1005 10.1 17.7105 9.70998C17.3205 9.31998 16.6905 9.31998 16.3005 9.70998L11.7105 14.3C11.3205 14.69 11.3205 15.32 11.7105 15.71L16.3005 20.3C16.6905 20.69 17.3205 20.69 17.7105 20.3C18.0905 19.91 18.1005 19.27 17.7105 18.88Z" fill="#98A2B3" />
            <path d="M15 29C7.26801 29 1 22.732 1 15H-1C-1 23.8366 6.16344 31 15 31V29ZM29 15C29 22.732 22.732 29 15 29V31C23.8366 31 31 23.8366 31 15H29ZM15 1C22.732 1 29 7.26801 29 15H31C31 6.16344 23.8366 -1 15 -1V1ZM15 -1C6.16344 -1 -1 6.16344 -1 15H1C1 7.26801 7.26801 1 15 1V-1Z" fill="#D0D5DD" />
        </svg>
    )
}

const nextPageIcon = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 15C30 6.71573 23.2843 0 15 0V0C6.71573 0 0 6.71573 0 15V15C0 23.2843 6.71573 30 15 30V30C23.2843 30 30 23.2843 30 15V15Z" fill="white" />
            <path d="M12.2895 18.88L16.1695 15L12.2895 11.12C11.8995 10.73 11.8995 10.1 12.2895 9.70998C12.6795 9.31998 13.3095 9.31998 13.6995 9.70998L18.2895 14.3C18.6795 14.69 18.6795 15.32 18.2895 15.71L13.6995 20.3C13.3095 20.69 12.6795 20.69 12.2895 20.3C11.9095 19.91 11.8995 19.27 12.2895 18.88Z" fill="#98A2B3" />
            <path d="M12.2895 18.88L16.1695 15L12.2895 11.12C11.8995 10.73 11.8995 10.1 12.2895 9.70998C12.6795 9.31998 13.3095 9.31998 13.6995 9.70998L18.2895 14.3C18.6795 14.69 18.6795 15.32 18.2895 15.71L13.6995 20.3C13.3095 20.69 12.6795 20.69 12.2895 20.3C11.9095 19.91 11.8995 19.27 12.2895 18.88Z" fill="#98A2B3" />
            <path d="M15 29C22.732 29 29 22.732 29 15H31C31 23.8366 23.8366 31 15 31V29ZM1 15C1 22.732 7.26801 29 15 29V31C6.16344 31 -1 23.8366 -1 15H1ZM15 1C7.26801 1 1 7.26801 1 15H-1C-1 6.16344 6.16344 -1 15 -1V1ZM15 -1C23.8366 -1 31 6.16344 31 15H29C29 7.26801 22.732 1 15 1V-1Z" fill="#D0D5DD" />
        </svg>
    )
}

function Product({ variant }) {
    // initiate pagination system
    // const { rooms } = useContext(GetRoomDataContext);
    // const { furnitures } = useContext(GetProductDataContext);
    // let { products } = {}
    // variant === "furniture" ? products = furnitures : products = rooms;
    const { products } = useContext(GetProductDataContext);

    const [currentProducts, setCurrentProducts] = useState(products);
    const [pageCount, setPageCount] = useState(0);
    const [productOffset, setProductOffset] = useState(0);
    const productsPerPage = 8;

    useEffect(() => {
        if (products !== undefined) {
            const endOffset = productOffset + productsPerPage;
            setCurrentProducts(products.slice(productOffset, endOffset));
            setPageCount(Math.ceil(products.length / productsPerPage));
        }
    }, [productOffset, productsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * productsPerPage) % products.length;
        setProductOffset(newOffset);
    };
    // paginate part
    return (
        <>
            <NavigationBar />
            <Container fluid>
                <Row className="product-hero">
                    <Col className="product-hero-content">
                        <Row>
                            <p>
                                Desain ruangan dengan <br /> kreasi mu sekarang
                                juga!
                            </p>
                        </Row>

                        <Row className="product-hero-start">
                            <Button
                                text="Mulai Design"
                                type="secondary-button"
                                toPage="/canvas"
                            />
                        </Row>
                    </Col>
                </Row>

                <Row className="product-selection">
                    <SelectionRoomContainer />
                </Row>

                <Row className="product-list-search">
                    <Search placeHolder="Cari produk, kategori, atau ruangan" />
                    <ul className="product-list-quick">
                        <li>
                            <button> Dekorasi </button>
                        </li>
                        <li>
                            <button> Peralatan Dapur </button>
                        </li>
                        <li>
                            <button> Perlengkapan Kamar Mandi </button>
                        </li>
                        <li>
                            <button> Perlengkapan Kantor </button>
                        </li>
                        <li>
                            <button> Aksesoris Penyimpanan </button>
                        </li>
                        <li>
                            <button> Aksesoris Kamar Anak </button>
                        </li>
                        <li>
                            <button> Boneka Bebek </button>
                        </li>
                    </ul>
                </Row>

                <Row className="product-list-content">
                    <Col className="product-list-sidebar">
                        <CategorySidebar />
                    </Col>

                    <Col className="product-list-preview">
                        <ProductCardContainer
                            variant={variant}
                            products={currentProducts}
                        />
                    </Col>
                    {/* {CardContainer} */}
                </Row>

                <Row>
                    <Col>
                        <ReactPaginate
                            breaklabel="..."
                            nextLabel='>'
                            previousLabel='<'
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
    );
}

export default Product;
