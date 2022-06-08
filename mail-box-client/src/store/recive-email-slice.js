import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    reciveEmails: [],
    seenEmails: 0,
    changed: false,
}

const reciveEmailSlice = createSlice({
    name: "reciveEmails",
    initialState,
    reducers: {
        fetchReciveEmail(state, action) {
            state.seenEmails = action.payload.seenEmails;
            state.reciveEmails = action.payload.reciveEmails;
        },
        readEmail(state, action) {
            const id = action.payload;
            const tempEmail = state.reciveEmails.find(item => item.id === id);
            tempEmail.seen = true;
            state.seenEmails++;
            state.changed = true
        }
    }
})

export const reciveEmailAction = reciveEmailSlice.actions;

export default reciveEmailSlice.reducer;