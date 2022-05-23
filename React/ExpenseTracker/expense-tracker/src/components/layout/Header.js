import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <NavLink  to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </header>
        </Fragment>
    )
}

export default Header