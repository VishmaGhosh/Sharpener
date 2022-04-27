import React,{useState} from 'react'
import ExpenseItems from './ExpenseItems'
import './Expense.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'


const Expenses = (props) => {
        const [filteredYear, setFilteredYear] = useState('2022');

        const filterChangeHandler = selectedYear => {
            setFilteredYear(selectedYear);
        };
        return (
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    props.expenses
                    .filter((expense) => {
                        console.log(expense.date.getFullYear());
                        console.log(filteredYear);
                        return expense.date.getFullYear().toString() === filteredYear;
                    })
                    .map((item) =>
                        <ExpenseItems key={item.id} title={item.title} amount={item.amount} date={item.date} location={item.location} />
                    )
                }
            </Card>
        )
    }

    export default Expenses