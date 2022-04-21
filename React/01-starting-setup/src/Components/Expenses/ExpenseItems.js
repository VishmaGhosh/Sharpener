import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItems.css'

const  ExpenseItems = (props) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} />
        </Card>
    )
}

export default ExpenseItems