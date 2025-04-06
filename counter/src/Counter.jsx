import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  }

  const decrement = () => {
    setCount(count => count - 1);
  }

  return (
    <div>
      <div className="container">
        <div>
        <h1 className="number">{count}</h1>
        </div>

        <div className="btns-container">
            <button onClick={decrement} className="control">-</button> 
            <button onClick={increment} className="control">+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
