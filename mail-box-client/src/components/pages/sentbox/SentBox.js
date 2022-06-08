import React from 'react'
import { useSelector } from 'react-redux';
import SentItem from './SentItem';
import classes from './SentBox.module.css'


const SentBox = () => {
    const sentEmails = useSelector(state => state.sentEmail.sentEmails);
    console.log("SentEmail", sentEmails);
    return (
        <div className={classes.mailList}>
            {
                sentEmails.map((item) => <SentItem key={item.id} item={item} />)
            }
        </div>
    )
}

export default SentBox;