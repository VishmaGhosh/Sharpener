import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sentEmails: [],
    totalEmail: 0,
    changed: false,
}

const sendEmailSlice = createSlice({
    name: "sendEmails",
    initialState,
    reducers: {
        addTosentEmail(state, action) {
            state.sentEmails.push(action.payload);
            state.totalEmail++;
        }
    }
})

export const sendEmailAction = sendEmailSlice.actions;

export default sendEmailSlice.reducer;