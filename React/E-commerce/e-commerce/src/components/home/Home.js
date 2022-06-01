import React from 'react'
import TourList from './TourList'
import classes from './Home.module.css'
const AlbumsList = [
    {
        id: 'a1',
        date: "july 12",
        city: "DETROIT, MI",
        place: "DTE ENERGY MUSIC THEATRE"
    },
    {
        id: 'a2',
        date: "july 15",
        city: "TORONTO,ON",
        place: "BUDWEISER STAGE"
    },
    {
        id: 'a3',
        date: "july 22",
        city: "DETROIT, MI",
        place: "DTE ENERGY MUSIC THEATRE"
    },

]
const Home = () => {
  return (
    <div>
          <header className={classes.home}>
              <button>Get Our Letest Albums</button>
          </header>
          <h1>Tours</h1>
          <TourList list={AlbumsList} />
    </div>
  )
}

export default Home