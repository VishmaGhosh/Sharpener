import logo from './logo.svg';
import './App.css';
import Signup from './components/auth/Signup';
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/auth/Login';

function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/' exact>
        <Redirect to="/home" />
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
      </Switch>
    </Layout>
  );
}

export default App;
