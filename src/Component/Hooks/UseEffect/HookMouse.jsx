import React,{useState, useEffect} from "react";

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const  logMousePostion = (event) => {
        console.log('Mouse Event')
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect( () => {
        console.log('useEffect called')
        window.addEventListener('mouse', logMousePostion)
    })


    return(
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse