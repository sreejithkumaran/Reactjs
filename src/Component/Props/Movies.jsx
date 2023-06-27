import React from "react";
import ProTypes from 'prop-types'

/*
const Movie = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}
*/

/*
const Movie = ({name, heroName}) => {
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            <h2>Destructuring example-01 | Functional Component</h2>
        </div>
    )
}
*/
const Movie = (props) => {
    const {name, heroName} = props
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            <h2>Destructuring example-02 | Functional Component </h2>
        </div>
    )
}

Movie.defaultProps = {
    name : 'Joker',
    heroName : 'Jocker'
}

Movie.ProTypes = {
    name : ProTypes.string,
    heroName : ProTypes.string

}

export default Movie;