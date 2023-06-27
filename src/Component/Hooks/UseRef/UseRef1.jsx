import { useRef, useState } from "react";


const UseRef1 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        setCount(count + 1)
        countRef.current ++; // update without being re-render

        console.log('State : '+count)
        console.log('Ref : '+countRef.current)
    }

    return(
        <div>
            <h2>
                count : {count}
            </h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UseRef1;