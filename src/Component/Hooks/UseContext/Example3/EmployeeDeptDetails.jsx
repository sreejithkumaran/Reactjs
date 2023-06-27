import React, { useContext } from "react";
import { employeeContext } from "./EmployeeApp";
const EmployeeDeptDetails = () => {
  const context = useContext(employeeContext);
  return (
    <div>
      <h4>Employee Salary Details Component</h4>
      <p>
        <label>
          Designation : <b>{context.desg}</b>
        </label>
      </p>
      <p>
        <label>
          Salary : <b>{context.salary}</b>
        </label>
      </p>
      <p>
        <label>
          DOB : <b>{context.dob}</b>
        </label>
      </p>
      <p>
        <label>
          Email : <b>{context.email}</b>
        </label>
      </p>
    </div>
  );
};

export default EmployeeDeptDetails;
