import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const incrementHandler = (e) => {
    dispatch({type: 'increment'})
  }
  const incremenBy5tHandler = (e) => {
    dispatch({ type: 'INCREMENTBY5' })
  }
  const decrementHandler = (e) => {
    dispatch({type: 'decrement'})
  }
  const decrementBy5Handler = (e) => {
    dispatch({ type: 'DECREMENTBY5' })
  }
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incremenBy5tHandler}>Increment by 5</button>
        <button onClick={decrementBy5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
