import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import cartContext from '../../store/cart-context'
import classes from './ProductItem.module.css'
const ProductItem = (props) => {
    const cartctx = useContext(cartContext);
    const addItemHandler = (e) => {
        e.preventDefault();
        cartctx.addItem({...props.item, quantity: 1 });
    }
    return (
      <Link to={`product/${props.item.id}`}>
            <div className={classes.items}>
                <div>
                    <h3>{props.item.title}</h3>
                    <img src={props.item.imageUrl} alt="some item" />
                </div>
                <div className={classes.itemFooter}>
                    <h4>${props.item.price}</h4>
                    <button onClick={addItemHandler}>Add To Cart</button>
                </div>
            </div>
      </Link>
      
  )
}

export default ProductItem