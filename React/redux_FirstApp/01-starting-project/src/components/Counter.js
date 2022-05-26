import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/index'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const dispatch = useDispatch();
  const show = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = (e) => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = (e) => {
    dispatch(counterActions.decrement())
  }
  const decrementBy5Handler = (e) => {
    dispatch(counterActions.decrementBy5())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementBy5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
