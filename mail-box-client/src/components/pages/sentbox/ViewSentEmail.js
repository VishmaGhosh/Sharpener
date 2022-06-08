import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import classes from '../ViewEmail.module.css'



const ViewSentEmail = (props) => {

    const email = useSelector(state => state.auth.email);
    const params = useParams();
    const sentEmails = useSelector(state => state.sentEmail.sentEmails);
    const findMail = sentEmails.find(item => item.id === params.eId);
    

    return (
        <div>
            <header className={classes.header}>
                <p>Back</p>
                <p>achive</p>
                <button>Delete</button>
            </header>
            <main className={classes.main}>
                <div><h2>{findMail.sub}</h2></div>
                <hr />
                <div>
                    <div>
                        <h3>{findMail.to}</h3>
                        <p>Form:{email}</p>
                        <hr></hr>
                    </div>
                    <div className={classes.msg}>
                        <p>{findMail.message}</p>
                    </div>
                </div>
            </main>
            <footer className={classes.footer}>
                <p>Reply</p>
                <p>Reply All</p>
                <p>Forward</p>
            </footer>
        </div>
    )
}

export default ViewSentEmail