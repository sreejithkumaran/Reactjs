import React from "react";
import { useContext } from "react";
import { employeeContext } from "./EmployeeApp";

const EmployeeContactDetails = () => {
  let context = useContext(employeeContext);

  return (
    <div>
      <h4>Employee Contact Details Component</h4>
      <p>
        <label>
          Email : <b>{context.email}</b>
        </label>
      </p>
      <p>
        <label>
          Mob : <b>{context.mob}</b>
        </label>
      </p>
      <p>
        <label>
          Work Location : <b>{context.location}</b>
        </label>
      </p>
      <p>
        <label>
          Address : <b>{context.address}</b>
        </label>
      </p>
    </div>
  );
};

export default EmployeeContactDetails;
