// import logo from './logo.svg';
import './App.css';
import { AuthContextProvider } from './store/auth-context';
import Header from './components/layout/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import UpdateProfile from './components/pages/UpdateProfile';
import ForgotPassword from './components/auth/ForgotPassword';

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/updateuser'>
            <UpdateProfile />
          </Route>
          <Route path='/forgotpassword'>
            <ForgotPassword />
          </Route>
        </Switch>
      </main>
    </AuthContextProvider>
  );
}

export default App;
