import React,{ useState, useEffect } from "react";

const UseEffect2 = () => {

    const [count, setCount] = useState(0)

    
    useEffect(() => { // runs on every render
        console.log(`The counter is ${count}`)
    })
   

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}


export default UseEffect2