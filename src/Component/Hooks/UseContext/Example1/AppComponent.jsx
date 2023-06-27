import React from "react";
import { useState } from "react";

import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const AppComponent = () => {

const [counter, setCounter] = useState(0)

const increment = () => {
    setCounter(counter + 1)
}

const decrement = () => {
    setCounter(counter - 1)
}

    return(
        <div>
            <h2>App Component</h2>
            <div>Counter : {counter}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <ChildComponent1 counterValue={counter} />
            <ChildComponent2 counterValue={counter} />
        </div>
    )
}

export default AppComponent