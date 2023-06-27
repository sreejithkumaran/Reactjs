import React from "react";

function Employee() {
  const employees = ["David", "Marta", "Villa", "Zubin", "Ester"];

//   const employee = employees.map((emp) => <h2>{emp}</h2>); // unique key error
  const employee = employees.map((emp, index) => <h2 key={index}> {index} - {emp}</h2>);

  return <div>{employee}</div>;
}

export default Employee;
