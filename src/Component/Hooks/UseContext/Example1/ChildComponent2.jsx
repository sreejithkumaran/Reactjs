import React from "react";

const ChildComponent2 = (props) => {
    const { counterValue } = props
    return(
        <div>
            <h2> Child Componenet 2 </h2>
            <div>Child Component 2 Counter : {counterValue}</div>
        </div>
    )
}

export default ChildComponent2
