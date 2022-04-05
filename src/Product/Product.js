import React from "react";
// import { useNavigate, useParams } from "react-router-dom";

import NavigationBar from "../Components/NavigationBar";
import ProductCardContainer from "./ProductCardContainer";
import SelectionRoomContainer from "./SelectionRoomContainer";
import CategorySidebar from "./CategorySidebar";
import Search from "./Search";
import PageListNavigator from "./PageListNavigator";
import Footer from "../Components/Footer";
import StartDesignBanner from "./StartDesignBanner";

import "./assets/style/furniture.css";

function Product() {
    // let navigate = useNavigate();
    // let { page } = useParams();
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

                <ProductCardContainer />
            </section>

            <div>
                <PageListNavigator />
            </div>

            <Footer />
        </div>
        </>
    )
}

export default Product