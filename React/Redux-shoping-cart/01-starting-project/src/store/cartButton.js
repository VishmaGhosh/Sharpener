import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showingCart: false
}
const cartButtonScile = createSlice({
    name: 'cartButton',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showingCart = !state.showingCart
        },
    }
})

export const cartButtonActions = cartButtonScile.actions

export default cartButtonScile.reducer;