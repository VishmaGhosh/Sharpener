import React from 'react'
import classes from './Home.module.css'
import { useHistory } from 'react-router-dom'
const Home = () => {
    const history = useHistory();
    const clickHandler = (e) => {
        e.preventDefault();
        history.replace('/updateuser');

    }
  return (
      <div className={classes.home}>
          <h3>Welcome to Expense tracker</h3>
          <button onClick={clickHandler}>Your Profile is Incomplete. complete Now</button>
    </div>
  )
}

export default Home