import axios from 'axios';
import React, { useRef, useState } from 'react'
import classes from './ExpenseItem.module.css'

const ExpenseItem = (props) => {

  const [edit, setEdit] = useState(false)
  const descRef = useRef();
  const typeRef = useRef();
  const amountRef = useRef();

  const key = props.item[0];
  const deleteItem = (e) => {
    e.preventDefault();
    axios.delete(`https://expensetracker-e59f8-default-rtdb.firebaseio.com/expenses/${key}.json`)
      .then(res => {
        console.log(res);
        props.onFetchExpense();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const putHandler = (e) => {
    e.preventDefault();
    const newItem = {
      desc: descRef.current.value,
      title: typeRef.current.value,
      amount: amountRef.current.value
    }
    axios.put(`https://expensetracker-e59f8-default-rtdb.firebaseio.com/expenses/${key}.json`,newItem)
      .then(res => {
        console.log(res);
        props.onFetchExpense();
        setEdit(!edit);
      })
      .catch(err => {
        console.log(err);
      })
    
  }

  const editHandler = (e) => {
    setEdit(!edit);
  }

  const editLi = <li className={classes.expense}>
    <input type='text' ref={descRef} placeholder='Description' />
    <select name="cars" id="cars" ref={typeRef}>
      <option value="petrol">Petrol</option>
      <option value="food">Food</option>
      <option value="medicine">medicine</option>
      <option value="salary">Salary</option>
    </select>
    <input type='number' ref={amountRef} placeholder='Amount' />
    <button onClick={putHandler}>submit</button>
  </li>
  if (!edit)
    return (

      <li className={classes.expense}>
        <h3>{props.item[1].desc}</h3>
        <h3>{props.item[1].type}</h3>
        <h3>{props.item[1].amount}</h3>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteItem}>Delete</button>
      </li>
    )
  else return editLi;
}

export default ExpenseItem