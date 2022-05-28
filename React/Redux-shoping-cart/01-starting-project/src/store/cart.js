import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.cartItems.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            state.totalQuantity++;
        },
        removeFromCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - newItem.price;
            if (existingItem.quantity === 0) {
                state.cartItems = state.cartItems.filter(item => item.id !== newItem.id)
            }

            state.totalQuantity--;

         }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer