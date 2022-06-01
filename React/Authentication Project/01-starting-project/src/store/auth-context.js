import React from "react";

const authContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: (token) => { },
    logout: () => {}
})

export default authContext;