import React from 'react'
import ExpenseItem from './ExpenseItem'
import { CSVLink } from 'react-csv'
import expense from '../../store/expense'

const ExpenseList = (props) => {
  const expenseReport = {
    filename: 'expense.csv',
    header: "header",
    data: props.expenses
  }
  
  const downloadHandler = (e) => {
    e.preventDefault();
    
  }
  return (
    <ul>
      <CSVLink {...expenseReport}>Download Expenses</CSVLink>
          {
              props.expenses.map((item) => 
                  <ExpenseItem key={item[0]} item={item} onFetchExpense={props.onFetchExpense} />
              )
          }
    </ul>
  )
}

export default ExpenseList