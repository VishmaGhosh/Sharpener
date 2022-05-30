import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.cartItems = action.payload.items;
        },
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
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== newItem.id)
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - newItem.price;
            }

            state.totalQuantity--;
         }
    }
})

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))
        const sendRequest = async () => {
            const response = await fetch('https://react-http-b4518-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                })

            if (!response.ok) {
                throw new Error('Sending cart data is failed')
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'Success',
                title: 'Success!',
                message: 'Sending cart data Successfully!'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
       

        
    }

}

export const cartActions = cartSlice.actions;

export default cartSlice.reducer