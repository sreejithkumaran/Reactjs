import React, { useState, useMemo, useEffect, useCallback } from "react";

const UseCallBack = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState();

  /* called on every page rendering
  const calculation = expensiveCalculation(counter); */

  const calculation = useMemo(() => expensiveCalculation(counter), [counter]);

  const increment = () => {
    console.log("counter incremented -- called");
    setCounter(counter + 1);
  };

  const decrement = () => {
    console.log("counter decremented -- called");
    setCounter(counter - 1);
  };

  const displayName = useCallback((greeting) => {
    return greeting + ' ' +name
  }, [name])

  return (
    <div>
      <h1>Example With useCallback..</h1>
      <h3>{counter}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>increment</button>
      <h2>Expensive Calculation</h2>
      {calculation}
      <hr></hr>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      
      <hr></hr>
      <DisplayName displayName={displayName}></DisplayName>
    </div>
  );
};

const DisplayName = ({ displayName }) => {
  console.log("DisplayName Component Rendered");
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(displayName('Hello'));
    console.log("useEffect DisplayName");
  }, [displayName]);

  return <p>{`My Name is ${value}`}</p>;
};

const expensiveCalculation = (num) => {
  console.log("expensiveCalculation -- called ");

  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseCallBack;

/*
On page load :
expensiveCalculation -- called UseCallBack01.jsx:64
expensiveCalculation -- called UseCallBack01.jsx:64
display rendered 2 UseCallBack01.jsx:52
DisplayName Component Rendered 2 UseCallBack01.jsx:57
display rendered

on increment :
counter incremented -- called UseCallBack01.jsx:15
expensiveCalculation -- called 2 UseCallBack01.jsx:64
display rendered 2 UseCallBack01.jsx:52
DisplayName Component Rendered

On disply
display rendered 2 UseCallBack01.jsx:52
DisplayName Component Rendered UseCallBack01.jsx:57
display rendered

*/