import React from 'react'
import classes from './RestaurentSummary.module.css'

const RestaurentSummary = () => {
    return (
        <div className={classes.summary}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>Choose your fevourite meal from boared section of available meals and enjoy a Delicious Lunch or Dinner at home.</p>
            <p>All our meals are cooked with high quality ingrediants, just-in-time and of course by exprienced chefs</p>
        </div>
    )
}

export default RestaurentSummary