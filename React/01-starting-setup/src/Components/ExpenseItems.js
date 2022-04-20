import React from 'react'

function ExpenseItems({expense,spend}) {
  return (
    <div>{expense} - {spend}</div>
  )
}

export default ExpenseItems