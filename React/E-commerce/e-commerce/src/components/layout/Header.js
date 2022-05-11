import React, { Fragment } from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = () => {
  return (
      <Fragment>
          <header className={classes.header}>
              <h3>Home</h3>
              <h3>Store</h3>
              <h3>About</h3>
              <HeaderCartButton />
          </header>
    </Fragment>
  )
}

export default Header