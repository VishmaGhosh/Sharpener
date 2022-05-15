import React, { useContext, useEffect, useState } from 'react'
import authContext from '../../store/auth-context'
import cartContext from '../../store/cart-context'
import Button from '../UI/Button'
import classes from './Cart.module.css'

const Cart = (props) => {
    const [items, setItems] = useState([]);
    const cartCtx = useContext(cartContext)
    const authCtx = useContext(authContext);
    useEffect(() => {
        fetch(`https://crudcrud.com/api/3d63909c143f49fb88a8e675af87ee89/cart${authCtx.email}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setItems(data);
                console.log(data);
            })
            .catch(err => console.log(err))
    }, [])

    

    const removeItemHandler = (e) => {
        const id = e.target.parentElement.id;
        cartCtx.removeItem(id);
    }
    return (
        <div className={classes.cart}>
            <div className={classes.cartHeader}>
                <h1>Cart</h1>
                <button onClick={props.showCart}>X</button>
            </div>
            <div className={classes.cartBody}>
                <h3>Item</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
            </div>
            <ul>
                {
                    items.map((item, id) => <li key={id} id={item.id}>
                        <h5>{item.item.title}</h5>
                        <h5>{item.item.price}</h5>
                        <h5>{item.item.quantity}</h5>
                        <button onClick={removeItemHandler}>Remove</button>
                    </li>)
                }
            </ul>
            <div className={classes.totalAmount}>
                <h1>Total</h1>
                <h3>${cartCtx.totalAmount}</h3>
            </div>
            <Button>Purches</Button>
        </div>
    )
}

export default Cart