import React,{useState} from 'react'
import authContext from './auth-context.js'
const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userLoggedIn = !!(token);
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
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