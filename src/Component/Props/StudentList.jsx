import React from "react";

import Student from "./Student";

function studentList(){
    const students = [
        {
            fullName : 'Dwayne Johnson',
            course : 'MBA',
            year : 2000,
            grade : 'A+'
        },
        {
            fullName : 'Jonny Dewy',
            course : 'MCA',
            year : 2002,
            grade : 'A'
        },
        {
            fullName : 'Lily John',
            course : 'Bsc',
            year : 2001,
            grade : 'B+'
        },
        {
            fullName : 'Mary Rose',
            course : 'Diploma IT',
            year : 2025,
            grade : 'B'
        }
    ]

    const studentList = students.map(student => (
       <Student key={student.id} student={student} />
    //    key cannot be passed as prop
    ))
    
    return <div>{studentList}</div>
}

export default studentList;