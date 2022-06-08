import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sentEmails: [],
}

const sendEmailSlice = createSlice({
    name: "sendEmails",
    initialState,
    reducers: {
        fetchSentEmail(state, action) {
            state.sentEmails = action.payload;
        },
        addTosentEmail(state, action) {
            state.sentEmails.push(action.payload);
            state.totalEmail++;
        }
    }
})

export const sendEmailAction = sendEmailSlice.actions;

export default sendEmailSlice.reducer;