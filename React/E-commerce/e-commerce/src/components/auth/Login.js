import React, { useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import authContext from '../../store/auth-context';
import classes from './Login.module.css'
const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const emailInputref = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(authContext);
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputref.current.value;
        const enteredPassword = passwordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(res => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                }
                else {
                    return res.json().then(data => {
                        // Error Modal
                        let errorMsg = 'Authentication is Failed'
                        // if (data && data.error && data.error.message) {
                        //   errorMsg = data.error.message;
                        // }
                        throw new Error(errorMsg);
                    })
                }
            }).then(data => {
                // console.log(data.email);
                authCtx.login(data.idToken,data.email);
                history.replace('/');
            }).catch(err => {
                alert(err.message)
            })

    }
  return (
      <section className={classes.auth}>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
              <div className={classes.control}>
                  <label htmlFor='email'>Your Email</label>
                  <input type='email' id='email' required ref={emailInputref} />
              </div>
              <div className={classes.control}>
                  <label htmlFor='password'>Your Password</label>
                  <input type='password' id='password' required ref={passwordInputRef} />
              </div>
              <div className={classes.actions}>
                  {!isLoading && <button>Login</button>}
                  {isLoading && <p>Sending Request...</p>}
                  
              </div>
          </form>
      </section>
  )
}

export default Login