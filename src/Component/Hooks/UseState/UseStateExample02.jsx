 import React,{useState} from 'react'

 function UseStateExample02() {
    const[counter, setCounter] = useState(0)

     function increment(){
        // setCounter(counter + 1)
        // setCounter(counter + 1)

        setCounter((prevState) => prevState + 1)
        setCounter((prevState) => prevState + 1)
     }

     function decrement(){
        setCounter((prevState) => prevState - 1)
     }


    return(
        <div>
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

export default UseStateExample02;