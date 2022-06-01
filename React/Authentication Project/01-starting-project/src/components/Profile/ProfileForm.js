import { useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import classes from './ProfileForm.module.css';
import authContext from '../../store/auth-context';

const ProfileForm = () => {
  const authCtx = useContext(authContext);
  const idToken = authCtx.token;

  const history = useHistory();

  const passwordInputRef = useRef(null);
  const changePasswordHandler = (e) => {
    e.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          history.replace('/');
          return res.json();
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
      .then(data => console.log(data))
      .catch(err => {
        console.log(err.message);
      })
  }
  return (
    <form className={classes.form} onSubmit={changePasswordHandler} >
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
