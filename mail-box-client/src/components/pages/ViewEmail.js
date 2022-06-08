import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import classes from './ViewEmail.module.css'
import { reciveEmailAction } from '../../store/recive-email-slice'
import { useHistory } from 'react-router-dom'


const ViewEmail = (props) => {
    const dispatch = useDispatch()

    const history = useHistory();
    const email = useSelector(state => state.auth.email);
    const params = useParams();
    const reciveEmails = useSelector(state => state.reciveEmail.reciveEmails);
    const findMail = reciveEmails.find(item => item.id === params.eId);
    useEffect(() => {
        dispatch(reciveEmailAction.readEmail(params.eId))
    }, [])

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(reciveEmailAction.deleteEmail(params.eId));
        history.push("/home");
    } 

  return (
      <div>
          <header className={classes.header}>
              <p>Back</p>
              <p>achive</p>
              <button onClick={deleteHandler}>Delete</button>
          </header>
          <main className={classes.main}>
              <div><h2>{findMail.sub}</h2></div>
              <hr />
              <div>
                  <div>
                      <h3>{ findMail.sender}</h3>
                      <p>To:{email}</p>
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

export default ViewEmail