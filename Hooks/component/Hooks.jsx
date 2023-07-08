import React, { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter Component {count}</p>
      <h3>Number is {count % 2 === 0 ? "Even" : "Odd"}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Hooks;
