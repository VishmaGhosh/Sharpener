import React,{useRef, useContext} from 'react'
import authContext from '../../store/auth-context';
import classes from './UpdateProfile.module.css'

const UpdateProfile = () => {
    const authCtx = useContext(authContext);
    console.log(authCtx);
    const userNameRef = useRef();
    const photoUrlRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
            method: "POST",
            body: JSON.stringify({
                idToken: authCtx.token,
                displayName: userNameRef.current.value,
                photoUrl: photoUrlRef.current.value,
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
                console.log(data);
                
            }).catch(err => {
                alert(err.message)
            })
    }
  return (
      <div className={classes.userDetails}>
          <h2>Contact Details</h2>
          <form onSubmit={submitHandler}>
              <label>Full Name</label>
              <input type='text' ref={userNameRef} /><br></br>
              <label>Profile Photo Url</label>
              <input type='text' ref={photoUrlRef} /><br />
              <button type='submit'>Update</button>
          </form>
    </div>
  )
}

export default UpdateProfile