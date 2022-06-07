import React,{useRef} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from './SendEmailForm.module.css'
import { useSelector } from 'react-redux';

const SendEmailForm = () => {
    const toRef = useRef()
    const subRef = useRef()
    const textRef = useRef()

    const email = useSelector(state => state.auth.email);
    
    
    const sendEmail = () => {
        const sentTo = toRef.current.value;
        let temp = "";
        for (let i = 0; i < sentTo.length; i++) {
            if (sentTo[i] === "@" || sentTo[i] === ".") continue;
            temp += sentTo[i];
        }
        console.log("Temp",temp);

        fetch(`https://react-http-b4518-default-rtdb.firebaseio.com/${temp}/recive.json`,{
            method: "POST",
            body: JSON.stringify({
                sub: subRef.current.value,
                text: textRef.current.value,
                from: email
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                return res.json()
            }
            })
            .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    const putMailtoSentBox = () => {
        let newEmail = "";
        for (let i = 0; i < email.length; i++) {
            if (email[i] === "@" || email[i] === ".") continue;
            newEmail += email[i];
        }
        console.log(newEmail);

        fetch(`https://react-http-b4518-default-rtdb.firebaseio.com/${newEmail}/sent.json`, {
            method: "POST",
            body: JSON.stringify({
                to: toRef.current.value,
                sub: subRef.current.value,
                text: textRef.current.value,
                sender: email
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                else {
                    alert("Sending email is faild");
                }
            })
            .then(data => {
                console.log(data);
                alert("Email sent Successfully");
            })
            .catch(err => {
                console.log(err);
                alert("Something Went Wrong");
            })
    }
  
    const SubmitHandler = (e) => {
        e.preventDefault();
        putMailtoSentBox();
        sendEmail();
        
            
    }
  return (
      <div>
          <form onSubmit={SubmitHandler}>
              <label>To:</label>
              <input type="email" className={classes.to} ref={toRef} id="email-input" />
              <hr />
              <input type="text" className={classes.sub} ref={subRef} />
              <hr />
              <textarea type="text" className={classes.text} ref={textRef} />
              <hr />
              <button type='submit'>Send</button>
          </form>
          <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
          />
    </div>
  )
}

export default SendEmailForm