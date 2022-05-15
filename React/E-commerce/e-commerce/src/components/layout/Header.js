import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink activeClassName={classes.active} to='/home'>Home</NavLink>
        <NavLink activeClassName={classes.active} to='/'>Store</NavLink>
        <NavLink activeClassName={classes.active} to='/about'>About</NavLink>
        <NavLink activeClassName={classes.active} to='/contactus'>Contact us</NavLink>
        <NavLink activeClassName={classes.active} to='/auth'>Login</NavLink>
        <HeaderCartButton showCart={props.showCart} />
      </header>
    </Fragment>
  )
}

export default Header