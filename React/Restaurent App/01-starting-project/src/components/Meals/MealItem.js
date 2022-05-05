import React from 'react'

const MealItem = (props) => {
  return (
    <li>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>${props.price}</p>
    </li>
  )
}

export default MealItem