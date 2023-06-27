import React from "react";

const ChildComponent1 = (props) => {
    const { counterValue } = props

    return(
        <div>
            <h2> Child Componenet 1 </h2>
            <div>Child Component 1 Counter : {counterValue}</div>
        </div>
    )
}

export default ChildComponent1
