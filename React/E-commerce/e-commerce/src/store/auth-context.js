import React,{useState} from "react";

const authContext = React.createContext({
    token: '',
    email:'',
    isLoggedIn: false,
    login: (token,email) => { },
    logout: () => {},
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState(null);

    const userIsLoggedIn = !!token;
    const loginHandler = (token,email) => {
        setToken(token);
        console.log(email);
        setEmail(email.slice(0,3));
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => { 
        setToken(null);
        setEmail(null);
        localStorage.removeItem('token');
    }

    const contextValue = {
        token: token,
        email: email,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
    
    return <authContext.Provider value={contextValue}>
        {props.children}
    </authContext.Provider>
}

export default authContext;