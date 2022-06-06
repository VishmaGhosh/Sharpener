import React,{useRef} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from './SendEmailForm.module.css'

const SendEmailForm = () => {
    const toRef = useRef()
    const subRef = useRef()
    const textRef = useRef()

    const SubmitHandler = (e) => {
        e.preventDefault();

        fetch('https://react-http-b4518-default-rtdb.firebaseio.com/sentEmail.json', {
            method: "POST",
            body: JSON.stringify({
                to: toRef.current.value,
                sub: subRef.current.value,
                text: textRef.current.value
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
  return (
      <div>
          <form onSubmit={SubmitHandler}>
              <label>To:</label>
              <input type="text" className={classes.to} ref={toRef} />
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