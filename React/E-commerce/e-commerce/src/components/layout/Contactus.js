import React, { useRef } from 'react'
import classes from './Contactus.module.css'
const Contactus = () => {
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);
    const submitHandler = async (e) => {
        const user = {
            name: nameInput.current.value,
            email: emailInput.current.value,
            phone: phoneInput.current.value,
        }
        e.preventDefault();
        const response = await fetch('https://react-http-b4518-default-rtdb.firebaseio.com/movies.json', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }
  return (
      <form className={classes.form}>
          <div>
              <label>Name</label><br />
              <input ref={nameInput} type="text" /><br />
              <label>Email</label><br />
              <input ref={emailInput} type="text" /><br></br>
              <label>Phone</label><br />
              <input ref={phoneInput} type="number" /><br />
              <button onClick={submitHandler}>Submit</button>
          </div>
              
          </form>
  )
}

export default Contactus