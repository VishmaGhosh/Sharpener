import ExpenseItems from "./Components/ExpenseItems";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <h3>Expenses List</h3>
      <ExpenseItems expense="petrol" spend='500' />
      <ExpenseItems expense="Food" spend='200' />
      <ExpenseItems expense="Movies" spend='300' />
    </div>
  );
}

export default App;
