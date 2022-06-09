import React from 'react'
import Inbox from './inbox/Inbox'
import classes from './Home.module.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const history = useHistory()

  const unReadMsg = useSelector(state => state.reciveEmail.unseenEmails)
  console.log(unReadMsg);

  const clickHandler = (e) => {
    e.preventDefault()
    history.push("/sendemail")
  }

  const openSentBox = (e) => {
    e.preventDefault();
    history.push('/sentbox')
  }
  return (
      <div className={classes.main}>
      <div className={classes.menu}>
        <ul>
          <li><button onClick={clickHandler}>Compose Email</button></li>
          <li className={classes.inbox}>Inbox<span>{unReadMsg}</span></li>
          <li>Draft</li>
          <li>Stared</li>
          <li>Achived</li>
          <li onClick={openSentBox}>Sent</li>
        </ul>
      </div>
      <div className={classes.list}>
        <div className={classes.listHeader}>
          <h4>Achive</h4>
          <h4>Move</h4>
          <h4>Spam</h4>
          <h4>Delete</h4>
        </div>
        <hr />
        <Inbox />
      </div>
    </div>
  )
}

export default Home