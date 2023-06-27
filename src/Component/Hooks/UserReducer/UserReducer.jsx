import React,{ useReducer } from "react";

const initialState = 0

const reducer = (state, action) => {
    console.log(state, action);
    
    if(action.type === "INCREMENT"){
        return state + 1;
    }

    if(action.type === "DECREMENT"){
        return state - 1;
    }
    return state
}

const UserReducer = () => {

const [state, dispatch] = useReducer(reducer, initialState)
  
    return (
        <div>
            <h1>useReducer</h1>
            <h3>{state}</h3>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
        </div>
    )
}


export default UserReducer