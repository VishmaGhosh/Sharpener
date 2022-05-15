import React, { useContext, useState } from 'react'
import authContext from './auth-context';
import cartContext from './cart-context'

const CartContextProvider = (props) => {

    const [items, setItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);
    const authCtx = useContext(authContext);
    const addItemToCartHandler = (item) => {
        setItems([...items, item])
        setTotalAmount(totalAmount + item.quantity * item.price);
        cartContextList.items = [...items]
        // cartContextList.items.push(item);
        fetch(`https://crudcrud.com/api/3d63909c143f49fb88a8e675af87ee89/cart${authCtx.email}`, {
            method: "POST",
            body: JSON.stringify({
                item: item,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => console.log(res))
            .catch(err => console.log(err))
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