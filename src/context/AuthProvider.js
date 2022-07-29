import { createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const getToken = () => {
        const tokenSession = sessionStorage.getItem('token');
        const userToken = tokenSession;
        return userToken;
    };

    const saveToken = (userToken) => {
        sessionStorage.setItem('token', userToken);
    };

    const removeToken = () => {
        sessionStorage.removeItem('token');
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