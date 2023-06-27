import React, { useState, useEffect } from "react";

const HookCounterOne = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect( () => {
        console.log('useEffect : updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count+1)}>Click {count} Times</button>
        </div>
    )

}

export default HookCounterOne