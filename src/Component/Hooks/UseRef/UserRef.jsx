import React, { useState, useRef } from "react";
/*
1. DOM reference
2. userRef for storing the previous state
3. hold mutable value prevent re-render of component
*/

const UserRef = () => {

  const inputE1 = useRef("")
  console.log(inputE1)

  const [name, setName] = useState("");

  const resetInput = () => {
    setName("");
  };

  return(
    <div>
        <input type='text' name='name' autoComplete='off' value={name} 
        onChange={(e)=> setName(e.target.value)} />
        <button onClick={resetInput}>Reset</button>
    </div>
  )
};

export default UserRef;
