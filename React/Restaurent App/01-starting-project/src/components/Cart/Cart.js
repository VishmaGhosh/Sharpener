import React, { useContext } from 'react'
import cartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartCtx = useContext(cartContext);
    console.log("In cart",cartCtx.items);

    const removeItemHandler = (e) => {
        // e.preventDefault();
        const id = e.target.parentElement.id;
        cartCtx.removeItem(id);
    }
    const cartItem = (
        <ul className={classes['cart-items']}>
            {
                cartCtx.items.map((item) => <li key={item.id} id={item.id}>
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                    <span>{item.price}</span>
                    <button>+</button>
                    <button onClick={removeItemHandler}>-</button><hr></hr></li>)
            }
        </ul>
    )
    return (
        <Modal onClose={props.onClose} >
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

        </Modal>
    )
}

export default Cart