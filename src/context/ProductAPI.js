import axios from "../api/axios";
import React, { createContext, useEffect, useState } from "react";

const GetProductDataContext = createContext();

export const GetProductDataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await axios
                .get(`/product/all`, {})
                .then((res) => setProducts(res.data?.data?.data))
                .catch((error) => console.log(error));
        };
        getData();
        return () => {
            setProducts([]);
        };
    }, []);
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
