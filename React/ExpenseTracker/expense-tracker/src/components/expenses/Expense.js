import React, { useEffect } from 'react'
import ExpenseInput from './ExpenseInput'
import ExpenseList from './ExpenseList'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { expenseActions } from '../../store/expense'

const Expense = () => {

    // const [expenses, setExpenses] = useState([])

    const expenses1 = useSelector(state => state.expense.expenses);
    const dispatch = useDispatch();

    const fetchExpenses = () => {
        axios.get('https://expensetracker-e59f8-default-rtdb.firebaseio.com/expenses.json')
            .then((res) => {
                // console.log(res.data);
                const newData = Object.entries(res.data).map(item => {
                    return item;
                })
                // setExpenses(newData);
                dispatch(expenseActions.initialExpense(newData));
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
                console.log(res.data.name);
                const newItem = []
                newItem[0] = res.data.name;
                newItem[1] = item;
                dispatch(expenseActions.addExpense(newItem))
                // fetchExpenses();
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <ExpenseInput onAddExpense={addExpenseHandler} />
            <ExpenseList expenses={expenses1} onFetchExpense={fetchExpenses} />
        </div>
    )
}

export default Expense