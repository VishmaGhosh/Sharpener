import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import authContext from '../../store/auth-context'
import classes from './Header.module.css'
import { useHistory } from 'react-router-dom'

const Header = (props) => {
    const authCtx = useContext(authContext);

    const history = useHistory();
    const logoutHandler = (e) => {
        e.preventDefault();
        authCtx.logout();
        history.replace("/login");
    }
    return (
        <Fragment>
            <header className={classes.header}>
                <NavLink  to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                {authCtx.isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
            </header>
        </Fragment>
    )
}

export default Header