
import React,{useReducer} from "react"

const initialState = 0

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


const CounterOne = () => {

    const [count, disptach] = useReducer(reducer, initialState)

    return(
        <div>
            <div>Count ={count}</div>
            <button onClick={() => disptach('increment')}>Increment</button>
            <button onClick={() => disptach('decrement')}>Decrement</button>
            <button onClick={() => disptach('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne