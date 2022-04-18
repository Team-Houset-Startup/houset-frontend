import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

import NavigationBar from "../Components/NavigationBar";
import ProductCardContainer from "./ProductCardContainer";
import RoomCardContainer from "./RoomCardContainer";
import SelectionRoomContainer from "./SelectionRoomContainer";
import CategorySidebar from "./CategorySidebar";
import Search from "./Search";
import PageListNavigator from "./PageListNavigator";
import Footer from "../Components/Footer";
import StartDesignBanner from "./StartDesignBanner";

import "./assets/style/product.css";
import products from "../db/furniture.json";

function Product( {variant} ) {
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

                <ProductCardContainer variant={variant} products={currentProducts}/>
                {/* {CardContainer} */}
                <ReactPaginate
                    breaklabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    onPageChange={handlePageClick}
                    // pageRangeDisplayed={16}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
            </section>

            <Footer />
        </div>
    )
}

export default Product