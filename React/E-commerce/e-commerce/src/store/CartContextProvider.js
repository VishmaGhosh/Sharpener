import React, { useState } from 'react'
import cartContext from './cart-context'

const CartContextProvider = (props) => {

    const [items, setItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (item) => {
        setItems([...items, item])
        setTotalAmount(totalAmount + item.quantity * item.price);
        cartContextList.items = [...items]
        // cartContextList.items.push(item);
    }

    const removeItemFromCartHandler = (id) => {
        setItems(items.filter((item) => {
            return item.id !== id;
        }))
        
        setTotalAmount(items.reduce((acc, item) => {
            return acc += item.quantity * item.price;
        }, 0))
        cartContextList.totalAmount = totalAmount;
        

    }

    const cartContextList = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <cartContext.Provider value={cartContextList}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartContextProvider