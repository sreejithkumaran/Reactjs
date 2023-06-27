import { useContext } from "react";
import { employeeContext } from "./EmployeeApp";

const EmployeeBasicDetails = () => {
  let context = useContext(employeeContext);
  return (
    <div>
      <h4>Employee Basic Details Component</h4>
      <p>
        <label>
          Id : <b>{context.id}</b>
        </label>
      </p>
      <p>
        <label>
          Name : <b>{context.name}</b>
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

export default EmployeeBasicDetails;
