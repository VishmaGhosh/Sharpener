import React from 'react'
import ExpenseItems from './ExpenseItems'
import './Expense.css'
import Card from '../UI/Card'
const  Expenses = (props) => {
  return (
      <Card className='expenses'>
          {
              props.expenses.map((item) =>
                  <ExpenseItems key={item.id} title={item.title} amount={item.amount} date={item.date} location={item.location} />
              )
          }
      </Card>
  )
}

export default Expenses