import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import cartButtonReducer from "./cartButton";

const store = configureStore({
    reducer : {cartButton: cartButtonReducer, cart: cartReducer}
})

export default store;