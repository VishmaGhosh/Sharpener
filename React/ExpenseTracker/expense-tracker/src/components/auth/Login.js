import React, { useRef, useContext } from 'react'
import authContext from '../../store/auth-context';
import { NavLink, useHistory } from "react-router-dom";
import classes from './Login.module.css'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const authCtx = useContext(authContext);
    const history = useHistory();

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
                // console.log(data);
                authCtx.login(data.idToken);
                history.replace('/');
            }).catch(err => {
                alert(err.message)
            })

    }
    return (
        <div className={classes.form}>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <label>Email</label><br />
                <input type='email' ref={emailRef} /><br />
                <label>Password</label><br />
                <input type='password' ref={passwordRef} /><br />
                <button type='submit'>Login</button>
            </form>
            <NavLink to='/forgotpassword'>Forgot Password ? </NavLink>
        </div>
    )
}

export default Login