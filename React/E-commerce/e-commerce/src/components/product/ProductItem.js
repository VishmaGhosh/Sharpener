import React from 'react'
import classes from './ProductItem.module.css'
const ProductItem = (props) => {
  return (
      <div className={classes.items}>
          <div>
              <h3>{props.item.title}</h3>
              <img src={props.item.imageUrl} alt="some item" />
          </div>
          <div className={classes.itemFooter}>
              <h4>{props.item.price}</h4>
              <button>Add To Cart</button>
          </div>
      </div>
  )
}

export default ProductItem