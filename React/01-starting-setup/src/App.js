import {useState} from 'react'
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense";

const  App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: 'car insurance',
      amount: 300,
      date: new Date(2022,3,20),
      location: "malda"
    },
    {
      id: 2,
      title: 'Food',
      amount: 100,
      date: new Date(2022, 2, 20),
      location: "kolkata"
    },
    {
      id: 3,
      title: 'petrol',
      amount: 220,
      date: new Date(2022, 3, 15),
      location: "delhi"
    }
  ]
  )

  const addExpenseHandler = (expense) => {
    console.log("In App.Js");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })

  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      
    </div>
  );
}

export default App;
