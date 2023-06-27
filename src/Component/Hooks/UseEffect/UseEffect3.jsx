import React,{ useState, useEffect } from "react";

const UseEffect3 = () => {

    const [count, setCount] = useState(0)

    
    useEffect(() => { 
        console.log(`The counter is ${count}`)

        // Optional Return function
        return() => {
            console.log('I am being cleaned up !')
        }
    },[count]) // dependency array

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}


export default UseEffect3