import { createContext, useState } from "react"

const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children, items}) => {
    const [ checkoutItem, setCheckoutItem ] = useState(items || null);

    const setCheckoutCart = (item) => {
        setCheckoutItem(item);
    }

    return (
        <CheckoutContext.Provider value={{ checkoutItem, setCheckoutCart }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;