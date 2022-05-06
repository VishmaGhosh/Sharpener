import React,{useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import cartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext)
  console.log(cartCtx);
  let quantity = 0;
  cartCtx.items.forEach(item => {
    quantity = quantity + Number(item.quantity);
  })
  
  return (
    <button className={classes.button} onClick={props.onShownCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  )
}

export default HeaderCartButton