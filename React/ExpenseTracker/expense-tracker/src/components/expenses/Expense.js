import React, { useState, useEffect } from 'react'
import ExpenseInput from './ExpenseInput'
import ExpenseList from './ExpenseList'
import axios from 'axios'

const Expense = () => {

    const [expenses, setExpenses] = useState([])

    const fetchExpenses = () => {
        axios.get('https://expensetracker-e59f8-default-rtdb.firebaseio.com/expenses.json')
            .then((res) => {
                // console.log(res.data);
                const newData = Object.entries(res.data).map(item => {
                    return item;
                })
                setExpenses(newData);
                // console.log(newData);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchExpenses();
    }, [])

    const addExpenseHandler = (item) => {

        axios.post('https://expensetracker-e59f8-default-rtdb.firebaseio.com/expenses.json', item)
            .then(res => {
                console.log(res);
                fetchExpenses();
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <ExpenseInput onAddExpense={addExpenseHandler} />
            <ExpenseList expenses={expenses} onFetchExpense={fetchExpenses} />
        </div>
    )
}

export default Expense