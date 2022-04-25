import React from 'react'

function ExpenseForm() {
  return (
    <div>
          <div>
              <input type="text" placeholder='Title' onChange={(e) => console.log(e.target.value)}></input>
              <input type="number" placeholder='amount' onChange={(e) => console.log(e.target.value)}></input>
              <input type="date"></input>
          </div>
          <button>Add Expense</button>
    </div>
  )
}

export default ExpenseForm