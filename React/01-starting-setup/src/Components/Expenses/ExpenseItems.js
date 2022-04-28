import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItems.css'

const ExpenseItems = (props) => {

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <ExpenseDetails title={props.title} amount={props.amount} />

            </Card>
        </li>
    )
}

export default ExpenseItems