import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
// import authContext from '../../store/auth-context'
import classes from './Header.module.css'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth' 
import { themeActions } from '../../store/theme';
import { expenseActions } from '../../store/expense';

const Header = (props) => {
    // const authCtx = useContext(authContext);

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch();
    const amount = useSelector(state => state.expense.amount)
    const isPremium = useSelector(state => state.expense.isPremium);
    const dark = useSelector(state => state.theme.dark)
    
    console.log(amount);

    const history = useHistory();
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.logout())
        // authCtx.logout();
        history.replace("/login");
    }

    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(themeActions.themeSwitch());
    }

    const premiumHandler = (e) => {
        e.preventDefault()
        dispatch(expenseActions.addPremium())
    }
    return (
        <Fragment>
            <header className={classes.header}>
                <NavLink  to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
                {amount > 10000 && !isPremium && <button onClick={premiumHandler}>Get Premium</button>}
                {isPremium && <button onClick={clickHandler}>{ dark ? "DARK" : "LIGHT"}</button>}
            </header>
        </Fragment>
    )
}

export default Header