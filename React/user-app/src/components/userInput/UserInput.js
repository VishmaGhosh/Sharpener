import React, { useState } from 'react'
import Button from '../UI/Button';

const UserInput = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState(0);
    const userOnChangeHandler = (e) => {
        setUserName(e.target.value);
    }

    const ageOnChangeHandler = (e) => {
        setUserAge(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(userName.length === 0 || userAge.length === 0){
            alert("Eneter Valid input");
        }
        else{
            const user = {
                name: userName,
                age: userAge,
                id: Math.random()
            }
            props.onAddUser(user);
        }
        
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>User Name</label>
                <input type='text' onChange={userOnChangeHandler} />
                <label>User Age</label>
                <input type='number' min={1} max={40} onChange={ageOnChangeHandler} />
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    )
}

export default UserInput