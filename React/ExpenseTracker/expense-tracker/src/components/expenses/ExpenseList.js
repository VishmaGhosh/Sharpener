import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  return (
      <ul>
          {
              props.expenses.map((item) => 
                  <ExpenseItem key={item.id} item={item} />
              )
          }
    </ul>
  )
}

export default ExpenseList