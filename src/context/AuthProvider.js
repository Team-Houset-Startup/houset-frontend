import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // const [auth, setAuth] = useState({});
    // const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);

    const getToken = () => {
        const tokenSession = sessionStorage.getItem('token');
        const userToken = tokenSession;
        // return userToken?.data.token
        return userToken;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        sessionStorage.setItem('token', userToken);
        setToken(userToken);
    };

    const removeToken = () => {
        sessionStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{
            getToken, saveToken, removeToken
            // persist, setPersist 
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;