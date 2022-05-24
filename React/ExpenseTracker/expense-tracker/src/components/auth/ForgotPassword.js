import React, { useRef, useState } from 'react'
import classes from './ForgotPassword.module.css'

const ForgotPassword = () => {
    const emailRef = useRef()
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        setIsLoading(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
            method: "POST",
            body: JSON.stringify({
                requestType: "PASSWORD_RESET", 
                email: emailRef.current.value,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    setIsLoading(false);
                    setEmailSent(true);
                    return res.json();
                }
                else {
                    return res.json().then(data => {
                        // Error Modal
                        let errorMsg = 'Authenticate is Failed'
                        throw new Error(errorMsg);
                    })
                }
            }).then(data => {
                console.log(data); 
            }).catch(err => {
                alert(err.message)
            })
    }
  return (
      <div className={classes.form}>
          {!isLoading && !emailSent && <form onSubmit={submitHandler}>
              <label>Email</label>
              <input type='email' ref={emailRef} />
              <button type='submit' >Send</button>
          </form>}
          {isLoading && <h3>Loading...</h3>}
          {emailSent && <h1>Password reset Link sent to your email.</h1>}
    </div>
  )
}

export default ForgotPassword