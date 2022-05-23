import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
const Header = (props) => {
    return (
        <Fragment>
            <header>
                <NavLink  to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </header>
        </Fragment>
    )
}

export default Header