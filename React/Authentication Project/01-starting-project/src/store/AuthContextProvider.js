import React,{useState} from 'react'
import authContext from './auth-context.js'
const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const userLoggedIn = !!(token);
    const loginHandler = (token) => {
        setToken(token);
    }

    const logoutHandler = () => {
        setToken(null);
    }

    const authContextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };
    return (
        <authContext.Provider value={authContextValue}>
            {props.children}
        </authContext.Provider>

    )
}

export default AuthContextProvider