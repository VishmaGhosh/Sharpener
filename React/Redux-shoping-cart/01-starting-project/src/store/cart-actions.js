import { uiActions } from "./ui-slice"
import { cartActions } from "./cart"


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

export const fethCartData = () => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Sending...',
            message: 'Fetch cart data!'
        }))
        const fetData = async () => {
            const response = await fetch('https://react-http-b4518-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error('Sending cart data is failed')
            }

            const data = response.json();
            return data;
        }

        try {
            const cartItems = await fetData();
            dispatch(cartActions.replaceCart(cartItems))
            dispatch(uiActions.showNotification({
                status: 'Success',
                title: 'Success!',
                message: 'Fetch cart data Successfully!'
            }))
        }
        catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetch cart data failed!'
            }))
        }

    }
}