import React from 'react'

const User = (props) => {
  return (
    <div style={{display: 'flex'}}>
        <li>{props.user.name}({props.user.age})</li>
    </div>
  )
}

export default User