import React, { useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>
        Increment
      </button>
      <button onClick={() => counterContext.setCount(counterContext.count - 1)}>
        Decrement
      </button>
      <button onClick={() => counterContext.setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
