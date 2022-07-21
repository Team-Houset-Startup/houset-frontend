import { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom";
import Checkout from "../Transaction/Checkout";

const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children }) => {
    const [checkoutItem, setCheckoutItem] = useState();

    const setCheckoutCart = (item) => {
        setCheckoutItem(item);
    }

    return (
        <CheckoutContext.Provider value={{ setCheckoutCart }}>
            {children}
            <Routes>
                {checkoutItem !== {} ? <Route path="/checkout" element={<Checkout checkoutItem={checkoutItem} />} /> : ""}
            </Routes>
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;