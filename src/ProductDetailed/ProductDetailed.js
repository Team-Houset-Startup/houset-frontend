import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
// import { useHistory,useLocation } from "react-router-dom";
// import { Tab, Tabs } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import RecommendationProduct from "../Components/RecommendationProduct";
// import ProductLastSeen from "../Components/ProductLastSeen";
import ProductDescription from "./ProductDescription";
import ProductContainerSide from "./ProductContainerSide";
import Button from "../Components/Button";

import ProductThumbnail from "./ProductThumbnail";
import GetProductDataContext from "../context/ProductAPI";

import "./assets/style/product-detailed.css";
import CheckoutContext from "../context/CheckoutProvider";

export default function ProductDetailed() {
    const [selectedProduct, setSelectedProduct] = useState({});
    const { productId } = useParams();
    const { setCheckoutCart } = useContext(CheckoutContext);
    
    useEffect(() => {
        const getData = async () => {
            await axios
                .get(`/product/${productId}`, {})
                .then((res) => setSelectedProduct(res.data?.data))
                .catch((error) => console.log(error));
        };
        getData();
        return () => {
            setSelectedProduct({});
            setCheckoutCart(productId);
        };
    }, [productId]);
    return (
        <>
            <NavigationBar />
            <Container fluid>
                <Row>
                    <Col xl={5}>
                        <ProductContainerSide product={selectedProduct} />
                    </Col>
                    <Col xl={7}>
                        <ProductThumbnail product={selectedProduct} />
                    </Col>
                </Row>

                <Row xl={12}>
                    <Col xl={10} className="product-desc-col">
                        <ProductDescription product={selectedProduct} />
                    </Col>
                </Row>

                <hr />
                {/* error below */}
                <RecommendationProduct count="4" />

                {/* <ProductLastSeen /> */}
            </Container>

            <Footer />
        </>
    );
}
