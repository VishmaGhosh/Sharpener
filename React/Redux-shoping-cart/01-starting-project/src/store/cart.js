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
            const isExisting = state.cartItems.find(item => item.id === newItem.id);
            if (!isExisting) {
                state.cartItems.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title });
            }
            else {
                isExisting.quantity++;
                isExisting.totalPrice = isExisting.totalPrice + newItem.price;
            }
        },
        removeFromCart() { }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer