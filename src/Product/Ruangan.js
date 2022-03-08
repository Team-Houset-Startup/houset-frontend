import React from "react";
// import { Link } from "react-router-dom";

import "./assets/style/furniture.css";
import NavigationBar from "../Components/NavigationBar";
import ProductCardContainer from "./ProductCardContainer";
import SelectionRoomContainer from "./SelectionRoomContainer";
import CategorySidebar from "./CategorySidebar";
import Search from "./Search";
import Footer from "../Components/Footer";
import StartDesignBanner from "./StartDesignBanner";

function Ruangan() {
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

                <ProductCardContainer />
            </section>

            <Footer />
        </div>
    )
}

export default Ruangan