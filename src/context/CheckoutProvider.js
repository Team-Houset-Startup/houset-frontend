import { useEffect, useReducer } from "react";
import { createContext } from "react"
import { Route, Routes } from "react-router-dom";
import Checkout from "../Transaction/Checkout";

const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children }) => {

    const [checkoutItem, updateCheckoutItem] = useReducer(
        (state, updates) => ({ ...state, ...updates }),
        {
            id: "",
            name: "",
            type: "",
            qty: "",
            color: "",
            price: "",
            image_gallery: ""
        }
    )

    const updateCheckoutCart = (dataForUpdate) => {
        updateCheckoutItem(dataForUpdate)
    }

    return (
        <CheckoutContext.Provider value={{ updateCheckoutCart }}>
            {children}
            <Routes>
                {/* {checkoutItem !== {} ? <Route path="/checkout" element={<Checkout checkoutItem={checkoutItem} />} /> : ""} */}
                <Route path="/checkout" element={<Checkout checkoutItem={checkoutItem} />} />
            </Routes>
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;