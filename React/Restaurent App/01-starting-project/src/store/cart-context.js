import React from "react";

 const cartContext = React.createContext({
     items:[],
     totalAmount: 0,
     addItem: (item) => {
        // console.log(item);
     },
     removeItem: (id) => {},
 })

export default cartContext;