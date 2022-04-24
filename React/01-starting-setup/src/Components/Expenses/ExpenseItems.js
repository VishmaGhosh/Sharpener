import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItems.css'

const  ExpenseItems = (props) => {
    const clickHandler = () => {
        console.log("Clicked !");
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={clickHandler}>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItems