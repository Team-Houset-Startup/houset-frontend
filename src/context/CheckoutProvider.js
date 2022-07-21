import { createContext, useState } from "react"

const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children, items}) => {
    const [ checkoutItem, setCheckoutItem ] = useState(items || null);

    return (
        <CheckoutContext.Provider value={{ checkoutItem, setCheckoutItem }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;