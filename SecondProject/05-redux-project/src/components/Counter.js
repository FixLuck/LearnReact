import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.counter.showCounter);


  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };

  const increaseHanlder = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increaseByAmount(10));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={increaseHanlder}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrease</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
