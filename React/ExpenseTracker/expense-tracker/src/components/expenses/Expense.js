import React, {useState} from 'react'
import ExpenseInput from './ExpenseInput'
import ExpenseList from './ExpenseList'

const Expense = () => {
    const [expenses, setExpenses] = useState([
        { id: 0, amount: 20, desc: "food", type: "food" },
        {id: 1, amount: 100, desc: "petrol", type: "fuel"},
    ])

    const addExpenseHandler = (item) => {
        setExpenses(prevExpenses => {
            const updatedExpenses = [...prevExpenses];
            updatedExpenses.unshift({ amount: item.amount, desc: item.desc, type: item.type, id: Math.random().toString() });
            return updatedExpenses;
        });
    }
  return (
      <div>
          <ExpenseInput onAddExpense={addExpenseHandler} />
          <ExpenseList expenses={expenses} />
    </div>
  )
}

export default Expense