import { createSlice } from '@reduxjs/toolkit'


const initialAuthState = {
    token: localStorage.getItem('token'),
    isLoggedIn: !!localStorage.getItem('token')
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.token = action.payload;
            state.isLoggedIn = !!state.token;
            localStorage.setItem('token', action.payload)
        },
        logout(state) {
            state.token = null;
            state.isLoggedIn = false;
            localStorage.removeItem('token')
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;