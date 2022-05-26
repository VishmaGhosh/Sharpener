import React, { Fragment } from 'react'
import classes from './Home.module.css'
import { useHistory } from 'react-router-dom'
import Expense from '../expenses/Expense';
// import authContext from '../../store/auth-context';
import { useSelector } from 'react-redux';


const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const authCtx = useContext(authContext);
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
      {isLoggedIn && <Expense />}
    </Fragment>
      

  )
}

export default Home