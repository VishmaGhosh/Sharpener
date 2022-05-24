import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  return (
      <ul>
          {
              props.expenses.map((item) => 
                  <ExpenseItem key={item[0]} item={item[1]} />
              )
          }
    </ul>
  )
}

export default ExpenseList