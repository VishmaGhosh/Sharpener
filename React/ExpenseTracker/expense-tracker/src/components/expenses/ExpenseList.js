import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  return (
      <ul>
          {
              props.expenses.map((item) => 
                  <ExpenseItem key={item[0]} item={item} onFetchExpense={props.onFetchExpense} />
              )
          }
    </ul>
  )
}

export default ExpenseList