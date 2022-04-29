import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)

        // setUserInput((prevSate) => {
        //     return { ...prevSate, enteredTitle: e.target.value }
        // })
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })

    }
    const dateChangeHandler = (e) => {
        setDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        }

        props.onSaveExpenseData(expenseData);
        setAmount('');
        setTitle('');
        setDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={amount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={date} min='2021-01-01' max='2025-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm