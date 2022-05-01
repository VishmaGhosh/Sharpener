import React,{useState} from 'react'
import './App.css';
import UserInput from './components/userInput/UserInput';
import UserList from './components/userList/UserList';

function App() {
  const [users, setUsers] = useState([{
    id: 'u1',
    name:'vishma',
    age:25
  }])

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
       return [user, ...prevUsers];
    })
  }
  return (
    <div className="App">
      <UserInput onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
