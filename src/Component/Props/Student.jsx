import React from "react";

function Student({ student }) {
  return (
    <div>
      <h3>
        {student.fullName} enrolled in {student.course} in {student.year} got
          ' <b>{student.grade}</b> ' grade
      </h3>
    </div>
  );
}

export default Student;
