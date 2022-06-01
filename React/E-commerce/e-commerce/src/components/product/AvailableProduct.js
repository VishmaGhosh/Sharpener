import React from 'react'
import classes from './AvailableProduct.module.css'
import ProductItem from './ProductItem'

const productsArr = [
    {
        id:'P1',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id:'p2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id: 'p3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id:'p4',
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
]
const AvailableProduct = () => {
    const productList = productsArr.map((item, id) => <ProductItem key={id} item={item} />)
    return (
        <div className={classes.products}>
            {productList}
        </div>
    )
}

export default AvailableProduct