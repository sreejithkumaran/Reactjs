import { useRef } from "react";


const UseRef2 = () => {

    const countRef = useRef(0);

    const handleIncrement = () => {
        countRef.current ++; 
        console.log('Ref : '+countRef.current)
    }

    return(
        <div>
            <h2>
                count : {countRef.current}
            </h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UseRef2;