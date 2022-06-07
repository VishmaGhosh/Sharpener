import React from 'react'
import Inbox from './Inbox'
import SendEmailForm from './SendEmailForm'
import classes from './Home.module.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
      <div className={classes.main}>
      <div className={classes.menu}>
        {/* <ul> */}
        <li><NavLink to='/sendemail' activeClassName={classes.active}><button>Compose Email</button></NavLink></li>
          <li>Inbox</li>
          <li>Draft</li>
          <li>Stared</li>
          <li>Achived</li>
          <li>Sent</li>
        {/* </ul> */}
      </div>
      <div className={classes.list}>
        <Inbox />
      </div>
    </div>
  )
}

export default Home