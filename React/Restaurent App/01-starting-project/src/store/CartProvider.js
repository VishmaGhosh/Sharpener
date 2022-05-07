import React,{useState} from 'react'
import cartContext from './cart-context'

const CartProvider = (props) => {

    const [items, setItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (item) => {
        setItems([...items, item])
        setTotalAmount(totalAmount+item.quantity*item.price);
        cartContextList.items.push(item);
        // cartContextList.totalAmount = 20;
    }

    const removeItemFromCartHandler = (id) => {
        setItems(items.map((item) => {
            if(item.id === id){
                if(item.quantity >0)
                    item.quantity = item.quantity - 1;
            }
            return item;
        }))
        setTotalAmount(items.reduce((acc, item) => {
            return acc += item.quantity * item.price;
        }, 0))
        
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

export default CartProvider