import React from 'react'
import './ExpenseItems.css'

function ExpenseItems(data) {
    return (
        <div className='expense-item'>
            <div>{data.date.toISOString()}</div>
            <div>{data.location}</div>
            <div className='expense-item__description'>
                <h2>{data.title}</h2>
                <div className='expense-item__price'>{data.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItems