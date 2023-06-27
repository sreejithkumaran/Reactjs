import React,{useState, useCallback, useMemo} from "react";
import EvenIncrement from "./EvenIncrement";
import OddIncrement from "./OddIncrement";

const ParentIncrement = () => {

    const [oddCount, setOddCount] = useState(0)
    const [evenCount, setEvenCount] = useState(0)

    console.log('Parent Component Rendered')

/*    const oddIncrement = () => {
        console.log('ParentIncrement - odd increment called')
        setOddCount(oddCount + 1)
    }
*/

    const oddIncrement =  useCallback( () => {
        console.log('ParentIncrement - odd increment called')
        setOddCount(oddCount + 1)
    },[oddCount]) 


    const evenIncrement = () => {
        console.log('ParentIncrement - even increment called')
        setEvenCount(evenCount + 2)
    }

    return(
        <div>
            <h3>Parent Increment Component</h3>
            <button onClick={oddIncrement}>Odd Incement ( + 1 )</button>
            <button onClick={evenIncrement}>Even Incement ( + 2 )</button>
            <OddIncrement value={oddCount}/>
            <EvenIncrement value={evenCount}/>
        </div>
    )

}

export default ParentIncrement
