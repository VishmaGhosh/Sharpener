import React, { Fragment, useContext } from 'react'
import classes from './Home.module.css'
import { useHistory } from 'react-router-dom'
import Expense from '../expenses/Expense';
import authContext from '../../store/auth-context';
const Home = () => {

  const authCtx = useContext(authContext);
    const history = useHistory();
    const clickHandler = (e) => {
        e.preventDefault();
        history.replace('/updateuser');

    }
  return (
    <Fragment>
      <div className={classes.home}>
        <h3>Welcome to Expense tracker</h3>
        <button onClick={clickHandler}>Your Profile is Incomplete. complete Now</button>
      </div>
      {authCtx.isLoggedIn && <Expense />}
    </Fragment>
      

  )
}

export default Home