
import Expenses from "./Components/Expenses/Expenses";

const  App = () => {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
      
      
    </div>
  );
}

export default App;
