import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
// import authContext from '../../store/auth-context'
import classes from './Header.module.css'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth' 

const Header = (props) => {
    // const authCtx = useContext(authContext);

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch();
    const amount = useSelector(state => state.expense.amount)
    console.log(amount);

    const history = useHistory();
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.logout())
        // authCtx.logout();
        history.replace("/login");
    }
    return (
        <Fragment>
            <header className={classes.header}>
                <NavLink  to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
                {amount > 10000 && <button>Get Premium</button>}
            </header>
        </Fragment>
    )
}

export default Header