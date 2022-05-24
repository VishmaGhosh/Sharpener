import React from 'react'
import classes from './ExpenseItem.module.css'

const ExpenseItem = (props) => {
  return (
      <li className={classes.expense}>
          <h3>{props.item.desc}</h3>
          <h3>{props.item.type}</h3>
          <h3>{props.item.amount }</h3>
    </li>
  )
}

export default ExpenseItem