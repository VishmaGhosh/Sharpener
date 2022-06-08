import React from 'react'
import Inbox from './Inbox'
import classes from './Home.module.css'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const clickHandler = (e) => {
    e.preventDefault()
    history.push("/sendemail")
  }
  return (
      <div className={classes.main}>
      <div className={classes.menu}>
        <ul>
          <li><button onClick={clickHandler}>Compose Email</button></li>
          <li>Inbox</li>
          <li>Draft</li>
          <li>Stared</li>
          <li>Achived</li>
          <li>Sent</li>
        </ul>
      </div>
      <div className={classes.list}>
        <Inbox />
      </div>
    </div>
  )
}

export default Home