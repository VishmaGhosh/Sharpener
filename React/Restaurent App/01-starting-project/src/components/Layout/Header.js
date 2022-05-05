import React,{Fragment} from 'react'
import classes from './Header.module.css'
import mealImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import RestaurentSummary from './RestaurentSummary'
const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImg} alt="A Table of delicious foods" />
              
        </div>
          <RestaurentSummary />
    </Fragment>
  )
}

export default Header