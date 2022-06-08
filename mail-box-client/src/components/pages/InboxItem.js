import React from 'react'
import { Link } from 'react-router-dom'
import classes from './InboxItem.module.css'

const InboxItem = (props) => {
  return (
    
      <li className={classes.list}>
        <div>
        <input type="checkbox" />
        {!props.item.seen &&<span className={classes.dot}></span>}
        <Link to={`/inbox/${props.item.id}`}><p>{props.item.sender}</p></Link>
        </div>

        <p>{props.item.sub}</p>
        <p>time</p>
      </li>
    
      
  )
}

export default InboxItem