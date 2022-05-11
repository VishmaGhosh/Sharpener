import React, { Fragment } from 'react'
import AvailableProduct from './AvailableProduct'
import ProductSummary from './ProductSummary'

const Products = () => {
  return (
      <Fragment>
          <ProductSummary />
          <AvailableProduct />
    </Fragment>
  )
}

export default Products