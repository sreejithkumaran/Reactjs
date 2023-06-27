import { useEffect, useRef, useState } from "react";
 
export const PrevState = () => {
    const [number, setNumber] = useState(0);
    const previousValue = useRef(null);
 
    useEffect(() => {
        previousValue.current = number;
    }, [number]);
 
    return (
        <div>
            <h5>number: {number}</h5>
            <h5>previous number: {previousValue.current}</h5>
            <button onClick={() => setNumber((previous) => previous + 1)}>
                increment
            </button>
        </div>
    );
};