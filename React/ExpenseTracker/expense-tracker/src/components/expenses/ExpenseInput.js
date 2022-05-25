import React, { useRef } from 'react'
import classes from './ExpenseInput.module.css'

const ExpenseInput = (props) => {
    const amountRef = useRef();
    const descRef = useRef();
    const typeRef = useRef();


    const formSubmitHandler = (e) => {
        e.preventDefault();
        const newExpense = {
            amount: amountRef.current.value,
            desc: descRef.current.value,
            type: typeRef.current.value
        }

        props.onAddExpense(newExpense);
    }
  return (
      <form onSubmit={formSubmitHandler} className={classes.expense_input} >
          <div>
              <label>Description</label>
              <input type="text" ref={descRef} />
              <label>Amount</label>
              <input type="number" ref={amountRef} />
              <label>Type</label>
              <select name="cars" id="cars" ref={typeRef}>
                  <option value="petrol">Petrol</option>
                  <option value="food">Food</option>
                  <option value="medicine">medicine</option>
                  <option value="salary">Salary</option>
              </select>
          </div>
          <button type="submit">Add Expense</button>
      </form>
  )
}

export default ExpenseInput