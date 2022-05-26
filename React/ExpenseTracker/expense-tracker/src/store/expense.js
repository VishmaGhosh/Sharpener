import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    expenses: [],
    amount: 0
}
const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        initialExpense(state, action) {
            state.expenses = [...action.payload];
            state.amount = action.payload.reduce((acc, item) => {
                acc += parseInt(item[1].amount);
                return acc;
            }, 0)
        },
        addExpense(state, action) {
            state.expenses.push(action.payload)
        },
        removeExpense(state, action) {
            state.expenses = state.expenses.filter(item => item[0] !== action.payload);
        }
    }
})

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;