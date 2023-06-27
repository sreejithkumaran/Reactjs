import React,{ useState, useEffect } from "react";

const UseEffect1 = () => {

    const [count, setCount] = useState(0)

    
    useEffect(() => { 
        console.log(`The counter is ${count}`)
    },[count]) // dependency array

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}


export default UseEffect1