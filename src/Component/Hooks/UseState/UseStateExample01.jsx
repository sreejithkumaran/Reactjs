 import React,{useState} from 'react'

 function UseStateExample01() {
    const[name, setName] = useState('sreejith')
    const[flag, setFlag] = useState(false)
    const[counter, setCounter] = useState(0)
    /* const[counter, setCounter] = useState(() => {
        return 0; // on executed once
    }) */

    function changeName() {
       return setName('Sreejith Kumaran')
    }

    function changeFlag() {
        return setFlag(!flag)
     }

     function increment(){
        return setCounter(counter + 1)
     }

     function decrement(){
        return setCounter(counter - 1)
     }


    return(
        <div>
            <h2> Hello : {name} </h2>
            <h2> Flag - {flag} </h2>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeFlag}>Change Flag</button>
            <br></br>
            <h2>-------------------------------------------------</h2>
            <button onClick={increment}>+</button>
            <h1>{counter}</h1>
            <button onClick={decrement}>-</button>
        </div>
    )

 }


/*
 function UseStateExample01() {
    let a ='sreejith'

    function changeName() {
        console.log('clicked!')
        a = 'Sreejith Kumaran'
        return a
    }

    return(
        <div>
            <h2> Hello : {a}</h2>
            <button onClick={changeName}>Click</button>
        </div>
    )

 }
*/

export default UseStateExample01;