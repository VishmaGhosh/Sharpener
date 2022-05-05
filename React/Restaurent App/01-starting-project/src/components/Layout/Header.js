import React from 'react'
import Cart from '../Cart/Cart'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.header_text}>
            <div className={classes.header_text_h1}>
                  <h1>ReactMeals</h1>
            </div>
            <div className={classes.cart_section}>
                <Cart />
            </div>
        </div>
    </div>
  )
}

export default Header