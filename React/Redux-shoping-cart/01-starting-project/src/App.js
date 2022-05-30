import { Fragment, useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions, sendCartData } from './store/cart';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isInitial) {
      fetch('https://react-http-b4518-default-rtdb.firebaseio.com/cart.json')
        .then(res => {
          return res.json();
        })
        .then(resData => {
          console.log(resData);
          dispatch(cartActions.replaceCart({items: resData.cartItems, totalQuantity: resData.totalQuantity, totalAmount: resData.totalAmount}))
      })
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch])
  return (
    <Fragment>
       { notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
    
  );
}

export default App;
