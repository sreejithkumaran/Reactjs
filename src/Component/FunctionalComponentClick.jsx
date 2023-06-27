import React from "react";

function FunctionalComponentClick(){

function clickHandler(){
    console.log('Button Clicked');
}
    return(
        <div>
            <button onClick={clickHandler}>Click Handler</button>  
        </div>
    )
}

export default FunctionalComponentClick;

// clickHandler is a function and not a function call. Dont use ()