import React from "react";
// import { useNavigate, useParams } from "react-router-dom";

import "../assets/style/furniture.css";
import NavigationBar from "../parts/NavigationBar";
import ProductCardContainer from "../parts/ProductCardContainer";
import SelectionRoomContainer from "../parts/SelectionRoomContainer";
import CategorySidebar from "../parts/CategorySidebar";
import Search from "../parts/Search";
import PageListNavigator from "../parts/PageListNavigator";
import Footer from "../parts/Footer";
import StartDesignBanner from "../parts/StartDesignBanner";

function Furniture() {
    // let navigate = useNavigate();
    // let { page } = useParams();
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

            <div>
                <PageListNavigator />
            </div>

            <Footer />
        </div>
    )
}

export default Furniture