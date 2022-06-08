import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import InboxItem from './InboxItem';
import classes from './Inbox.module.css'


const Inbox = () => {
    const reciveEmails = useSelector(state => state.reciveEmail.reciveEmails);
  return (
      <div className={classes.mailList}>
          {
              reciveEmails.map((item) => <InboxItem key={item.id} item={item} />)
          }
    </div>
  )
}

export default Inbox