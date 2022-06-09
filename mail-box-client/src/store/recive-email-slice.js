import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    reciveEmails: [],
    unseenEmails: 0,
    changed: false,
}

const reciveEmailSlice = createSlice({
    name: "reciveEmails",
    initialState,
    reducers: {
        fetchReciveEmail(state, action) {
            state.unseenEmails = action.payload.unseenEmails;
            state.reciveEmails = action.payload.reciveEmails;
        },
        readEmail(state, action) {
            const id = action.payload;
            const tempEmail = state.reciveEmails.find(item => item.id === id);
            tempEmail.seen = true;
            state.unseenEmails--;
            state.changed = true
        },
        deleteEmail(state, action) {
            const id = action.payload;
            const newEmails = state.reciveEmails.filter(item => item.id !== id);
            state.reciveEmails = newEmails;
        }

    }
})

export const reciveEmailAction = reciveEmailSlice.actions;

export default reciveEmailSlice.reducer;