import React,{useContext} from 'react'
import cartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartCtx = useContext(cartContext)
    const cartItem = (
        <ul className={classes['cart-items']}>
            {
                cartCtx.items.map((item) => <li>{item.name} {item.quantity} {item.price}</li>)
            }
        </ul>
    )
    return (
        <Modal onClose={props.onClose} >
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$35</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

        </Modal>
    )
}

export default Cart