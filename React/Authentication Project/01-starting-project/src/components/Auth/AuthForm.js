import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import authContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputref = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const authCtx = useContext(authContext);

  const [isLoading, setIsLoading] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputref.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    if (isLogin) {
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
              let errorMsg = 'Authenticate is Failed'
              // if (data && data.error && data.error.message) {
              //   errorMsg = data.error.message;
              // }
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

    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
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
            history.replace('/');
          }
          else {
            return res.json().then(data => {
              // Error Modal
              let errorMsg = 'Authenticate is Failed'
              if (data && data.error && data.error.message) {
                errorMsg = data.error.message;  
              }
              
              alert(errorMsg);
            })
          }
        })
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
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
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
