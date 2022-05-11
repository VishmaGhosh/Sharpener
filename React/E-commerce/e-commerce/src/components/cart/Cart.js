import React from 'react'
import Button from '../UI/Button'
import classes from './Cart.module.css'
const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }

]
const Cart = (props) => {
    let totalAmount = 0;
    cartElements.forEach((cur) => {
        totalAmount += cur.price * cur.quantity;
    },0)
  return (
      <div className={classes.cart}>
          <div className={classes.cartHeader}>
              <h1>Cart</h1>
              <button onClick={props.showCart}>X</button>
          </div>
          <div className={classes.cartBody}>
              <h3>Item</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
          </div>
          <ul>
              {
                  cartElements.map((item, id) => <li key={id}>
                      <h5>{item.title}</h5>
                      <h5>{item.price}</h5>
                      <h5>{item.quantity}</h5>
                      <Button>Remove</Button>
                  </li>)  
              }
          </ul>
          <div className={classes.totalAmount}>
              <h1>Total</h1>
              <h3>${totalAmount }</h3>
          </div>
          <Button>Purches</Button>
    </div>
  )
}

export default Cart