import React from 'react'
import ExpenseItems from './ExpenseItems';

const ExpenseList = (props) => {
   if(props.expenses.length === 0){
       return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
   } 

    return <ul className='expenses-list'>
        {
            props.expenses.map((item) =>
                <ExpenseItems key={item.id} title={item.title} amount={item.amount} date={item.date} location={item.location} />
            )
        }
    </ul>
}

export default ExpenseList