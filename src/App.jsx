import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./reducers/counter";
import "./App.css";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="counter">
        <h1>Counter with React+Redux Toolkit </h1>
        
        {count == 0  &&  (<span className="counter__output" style={{color:"black"}}>{count}</span>)}
        {count > 0  &&  (<span className="counter__output" style={{color:"green"}}>{count}</span>)}
        {count < 0  &&  (<span className="counter__output" style={{color:"red"}}>{count}</span>)}
        <div className="btn__container">
          <button
            className="control__btn"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="control__btn"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button className="reset" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
