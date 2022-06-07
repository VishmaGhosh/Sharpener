import React from 'react'
import classes from './InboxItem.module.css'

const InboxItem = (props) => {
  return (
      <li className={classes.list}>
          <div>
              <input type="checkbox" />
              <p>{props.item.from}</p>
          </div>
          
          <p>{props.item.text}</p>
          <p>time</p>
    </li>
  )
}

export default InboxItem