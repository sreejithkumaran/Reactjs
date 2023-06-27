import React from "react";

function personList(){
    const persons = [
        {
            name : 'Arnold',
            age : 27,
            skill : 'java',
            email : 'arnold@e.com'
        },
        {
            name : 'Luci',
            age : 22,
            skill : 'php',
            email : 'luci@e.com'
        },
        {
            name : 'Ram',
            age : 23,
            skill : 'javascript',
            email : 'ram@e.com'
        },
        {
            name : 'David',
            age : 25,
            skill : 'database',
            email : 'david@e.com'
        }
    ]

    const personDetailList = persons.map(person => (
        <h2>I am {person.name}, {person.age} old. My skill set is {person.skill}, and contact mail is {person.email} </h2>
    ))
    return <div>{personDetailList}</div>
}

export default personList;