import React,{useState} from 'react'
import cartContext from './cart-context'

const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const addItemToCartHandler = (item) => {
        setItems([...items, item])
        cartContextList.items.push(item);
    }

    const removeItemFromCartHandler = (id) => {}

    const cartContextList = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <cartContext.Provider value={cartContextList}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider