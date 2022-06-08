import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import sendEmailReducer from './send-email-slice'
import reciveEmailReducer from './recive-email-slice';

const store = configureStore({
    reducer: { auth: authReducer, sentEmail: sendEmailReducer, reciveEmail: reciveEmailReducer}
});


export default store;