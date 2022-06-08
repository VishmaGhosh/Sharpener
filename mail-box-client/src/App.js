import { useEffect } from 'react';
import './App.css';
import Signup from './components/auth/Signup';
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import SendEmailForm from './components/pages/SendEmailForm';
import { useSelector, useDispatch } from 'react-redux'
import { reciveEmailAction } from './store/recive-email-slice';
import Inbox from './components/pages/Inbox';
import ViewEmail from './components/pages/ViewEmail';



function App() {
  const dispatch = useDispatch();
  const reciveEmail = useSelector(state => state.reciveEmail);

  useEffect(() => {
    fetch('https://react-http-b4518-default-rtdb.firebaseio.com/vish26196gmailcom/recive/-N40iIc9HDmZ0gjB8Ual.json')
      .then(res => {
        if (!res.ok) {
          alert("Fetch data failed");
        }
        return res.json()
      })
      .then(data => {
        dispatch(reciveEmailAction.fetchReciveEmail({
          reciveEmails: data.reciveEmails,
          seenEmails: data.seenEmails,
      }))
      })
      .catch(err => {
      console.log(err)
    })
  }, [dispatch])
  
  useEffect(() => {
    if (reciveEmail.changed) {
      fetch('https://react-http-b4518-default-rtdb.firebaseio.com/vish26196gmailcom/recive/-N40iIc9HDmZ0gjB8Ual.json', {
        method: "PUT",
        body: JSON.stringify(reciveEmail)
      })
        .then(res => res.json())
        .then(data => console.log(data))
      .catch(err => console.log(err))
     }
  },[reciveEmail,dispatch])
  
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to="/inbox" />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/sendemail'>
          <SendEmailForm />
        </Route>
        <Route path='/inbox' exact>
          <Inbox />
        </Route>
        <Route path='/inbox/:eId'>
          <ViewEmail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
