import { useRef } from "react";

// Use useRef to focus the input:
const UseRef3 = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default UseRef3;
