import React,{memo} from "react";

const EvenIncrement = (props) => {

    const {value} = props;

    console.log('EvenIncrement - Even Component Rendered')

    return(
        <div>
            <h3>Even Increment Component</h3>
            <h1>{value}</h1>
        </div>
    )
}

export default memo(EvenIncrement)