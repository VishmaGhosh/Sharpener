import React from 'react'
import classes from './Footer.module.css'
const Footer = () => {
  return (
          <div className={classes.footer}>
              <h1>The Generics</h1>
              <div>
                  <button>YouTube</button>
                  <button>Facebook</button>
              </div>
          </div>
  )
}

export default Footer