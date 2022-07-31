import { createContext } from "react";

const AuthContext = createContext({});

// NOTE !!!
// Token is tkJowddv88
// Timout is tmDiwgnF29

export const AuthProvider = ({ children }) => {
    // 2 hour = 7200000 ms
    const sessionDuration = 7200000;

    const getToken = () => {
        // check the session time remaining
        // if the session timeout, stored token should remove, then user need to login
        const currentTime = new Date();
        const timeRemaining = localStorage.getItem('tmDiwgnF29') - currentTime.getTime();

        if (timeRemaining > 0) {
            const userToken = localStorage.getItem('tkJowddv88');
            setTimeout(() => {
                removeToken();
                alert('Your session ended, you will need to login');
                removeToken();
                window.location.reload();
            }, timeRemaining);
            return userToken;
        } else {
            removeToken();
            return null;
        }
    };

    const saveToken = (userToken) => {
        // init expired time logged in token
        const timeExpired = new Date().getTime() + sessionDuration;
        localStorage.setItem('tmDiwgnF29', timeExpired);
        localStorage.setItem('tkJowddv88', userToken);
    };

    const removeToken = () => {
        localStorage.removeItem('tmDiwgnF29');
        localStorage.removeItem('tkJowddv88');
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