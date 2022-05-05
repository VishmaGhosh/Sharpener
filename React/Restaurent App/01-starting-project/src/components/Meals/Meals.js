import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import AvailableMeals from './AvailableMeals'
import RestaurentSummary from './RestaurentSummary'

const Meals = () => {
  return (
    <Fragment>
        <RestaurentSummary />
        <AvailableMeals />
    </Fragment>
  )
}

export default Meals