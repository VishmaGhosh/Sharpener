import React, { useContext } from 'react'
import cartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(cartContext);
  return (
      <button className={classes.button} onClick={props.showCart}>Cart { cartCtx.items.length}</button>
  )
}

export default HeaderCartButton