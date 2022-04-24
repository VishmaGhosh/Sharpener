import React,{ useState} from 'react'
import './ExpenseItems.css'
const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)

  const clickHandler = () => {
    setTitle("Updated !!")
    console.log("Clicked !");
  }
  const updateAmount = () => {
    setAmount(100)
  }
  return (
    <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>{amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button>Delete Expense</button>
      <button onClick={updateAmount}>update amount</button>
    </div>
  )
}

export default ExpenseDetails