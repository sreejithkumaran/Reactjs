import React, { useState } from "react";

const PrevState = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    //setCount(count + 1)
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    //setCount(count - 1)
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  const incrementByFive = () => {
    //setCount(count + 5)
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <h3> Count : {count} </h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incrementByFive}>Increment by 5</button>
    </div>
  );
};

export default PrevState;
