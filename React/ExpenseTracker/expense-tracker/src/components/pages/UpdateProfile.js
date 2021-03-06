import React,{useRef, useContext, useEffect, useState} from 'react'
import authContext from '../../store/auth-context';
import classes from './UpdateProfile.module.css'

const UpdateProfile = () => {
    const authCtx = useContext(authContext);
    const userNameRef = useRef();
    const photoUrlRef = useRef();
    const codeRef = useRef();

    const [confirmPage, setConfirmPage] = useState(false);

    useEffect(() => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                userNameRef.current.value = data.users[0].displayName
                photoUrlRef.current.value = data.users[0].photoUrl
            })
            .catch(err => console.log(err))
    }, [])

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

    const confirmEmailHandler = (e) => {
        e.preventDefault();

        setConfirmPage(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
            method: "POST",
            body: JSON.stringify({
                requestType: "VERIFY_EMAIL",
                idToken: authCtx.token,
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

    const confirmEmail = (e) => {
        e.preventDefault();

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBfYZu61DWKwje2272Eom3nTMqkXkTLucg', {
            method: "POST",
            body: JSON.stringify({
                oobCode: codeRef.current.value
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(res => {
                if (res.ok) {
                    setConfirmPage(false);
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
    const Page = <div>
        <input type='text' ref={codeRef} />
        <button onClick={confirmEmail}>Verify Code</button>
    </div>

  return (
      <div className={classes.userDetails}>
          <h2>Contact Details</h2>
          <form onSubmit={submitHandler}>
              <label>Full Name</label>
              <input type='text' ref={userNameRef} /><br></br>
              <label>Profile Photo Url</label>
              <input type='text' ref={photoUrlRef} /><br />
              <button type='submit'>Update</button>
              <button onClick={confirmEmailHandler}>Comfirm Email</button>
          </form>
          {confirmPage && Page}
    </div>
  )
}

export default UpdateProfile