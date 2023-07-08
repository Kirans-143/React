import React from "react";
import Counter from "./components/Counter";
import { CounterContext } from "./context/CounterContext";
import { useContext } from "react";

const App = () => {
  const counterState = useContext(CounterContext);

  console.log("Context", counterState);
  return (
    <div className="App">
      <h3>Count is {counterState.count}</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
