import React, { useRef } from 'react'
import classes from './Login.module.css'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {authActions} from '../../store/auth-slice';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
            method: "POST",
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(res => {
                if (res.ok) {
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
                dispatch(authActions.login(data.idToken));
                history.replace('/');
            }).catch(err => {
                alert(err.message)
            })

    }

  return (
     <div className={classes.frm}>
          <h1>Signup</h1>
          <form onSubmit={loginHandler}>
              <label>Email</label><br />
              <input type="email" ref={emailRef} /><br />
              <label>Password</label><br />
              <input type="password" ref={passwordRef} /><br />
              <button type="submit">Login</button>
          </form>
    </div>
  )
}

export default Login