import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import productContext from '../../store/product-context'
import classes from './ProductDetails.module.css'

const ProductDetails = () => {
    const ctx = useContext(productContext);
    const param = useParams()
    const product = ctx.items.filter(item => item.id === param.productId);
    return (
        <Fragment>
            <div className={classes.product}>
                <div className={classes.images}>
                    <img src={product[0].imageUrl} alt="Product Image"></img><br />
                    <button>Buy Now</button>
                    <button>Add to Cart</button>
                </div>
                <div className={classes.details}>
                    <h1>{product[0].title}</h1>
                    <h3>Price ${product[0].price}</h3>
                    <h2>4*</h2>
                </div>
            </div>
                <div className={classes.review}>
                    <h1>Product Review</h1>
                    <ul>
                        <li>
                            <h3>Reviewer Name</h3>
                            <p>Review Contens</p>
                        </li>
                    </ul>
                </div>
           
        </Fragment>
       
    )
}

export default ProductDetails