import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState();

  /* called on every page rendering
  const calculation = expensiveCalculation(counter); */

  const calculation = useMemo(() => expensiveCalculation(counter),[counter])

  const increment = () => {
    console.log("counter incremented -- called");
    setCounter(counter + 1);
  };

  const decrement = () => {
    console.log("counter decremented -- called");
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Example With useMemo..</h1>
      <h3>{counter}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>increment</button>
      <h2>Expensive Calculation</h2>
      {calculation}
      <p>My Name is {name}</p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("expensiveCalculation -- called ");

  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemo;

