import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import InboxItem from './InboxItem';
import classes from './Inbox.module.css'


const Inbox = () => {
    const [emails, setEmails] = useState([])
    const email = useSelector(state => state.auth.email);
    let newEmail = "";
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@" || email[i] === ".") continue;
        newEmail += email[i];
    }
    const fetchEmail = () => {
        fetch(`https://react-http-b4518-default-rtdb.firebaseio.com/vish26196gmailcom/recive.json`)
            .then(res => {
                if (res.ok) {
                return res.json()
            }
            })
            .then(data => {
                let myData = Object.keys(data).map(key => data[key]);
                setEmails(myData);
        })
    }

    useEffect(() => {
        fetchEmail();
    }, [])
  return (
      <div className={classes.mailList}>
          {
             emails.map((item, id) => <InboxItem key={id} item={item} />)
          }
    </div>
  )
}

export default Inbox