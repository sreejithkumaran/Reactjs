import React,{memo} from "react";

const OddIncrement = (props) => {
    
    const {value} = props;

    console.log('OddIncrement - Odd Component Rendered')

    return(
        <div>
            <h3>Odd Increment Component</h3>
            <h1>{value}</h1>
        </div>
    )
}

export default memo(OddIncrement)