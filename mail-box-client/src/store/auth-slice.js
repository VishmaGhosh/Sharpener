import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
    isLoggedIn: !!localStorage.getItem('token')
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.isLoggedIn = !!state.token;
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('email',action.payload.email)
        },
        logout(state) {
            state.token = null;
            state.isLoggedIn = false;
            state.email = null;
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;