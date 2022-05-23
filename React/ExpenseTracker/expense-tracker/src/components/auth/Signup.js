import React, { useRef } from 'react'

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value === confirmPasswordRef.current.value) {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
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
                        console.log("User successfully Signup");
                    }
                })
                .catch(
                    err => console.log(err)
                )
        }
    }
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={submitHandler}>
                <label>Email</label><br />
                <input type='email' ref={emailRef} /><br />
                <label>Password</label><br />
                <input type='password' ref={passwordRef} /><br />
                <label>Confrm Password</label><br />
                <input type='password' ref={confirmPasswordRef} /><br />
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup