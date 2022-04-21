import React from 'react'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'


function ExpenseItems(props) {
    
    return (
        <div className='expense-item'>
            <div>
                <ExpenseDate date={props.date} />
            </div>
        <ExpenseDetails title={props.title} amount={props.amount} />
        </div>
    )
}

export default ExpenseItems