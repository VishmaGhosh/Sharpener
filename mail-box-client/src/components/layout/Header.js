import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import classes from './Header.module.css'


const Header = () => {
  return (
      <header className={classes.header}>
          <div className={classes.logo} >E-Com</div>
          <nav className={classes.nav}>
              <ul>
                <li><NavLink to='/home' activeClassName={classes.active}>Home</NavLink></li>
                <li><NavLink to='/login' activeClassName={classes.active}>Login</NavLink></li>
                 <li><NavLink to='/signup' activeClassName={classes.active}>Signup</NavLink></li>
              </ul>

          </nav>
      </header>
  )
}

export default Header