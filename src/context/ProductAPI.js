import axios from "../api/axios";
import React, { createContext, useEffect, useState } from "react";

const GetProductDataContext = createContext();

export const GetProductDataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const url = process.env.REACT_APP_URL;

    useEffect(() => {
        const getData = async () => {
            await axios
                .get(`/product/all`, {})
                .then((res) => {
                    const productReturn = res.data;
                    setProducts(productReturn?.data?.data);
                })
                .catch((error) => console.log(error));
        };
        getData();
        return () => {
            setProducts([]);
        };
    }, [url]);
    return (
        <GetProductDataContext.Provider
            value={{
                products,
                setProducts,
            }}
        >
            {children}
        </GetProductDataContext.Provider>
    );
};

export default GetProductDataContext;
