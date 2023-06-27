import React, { useState, createContext } from "react";

import EmployeeBasicDetails from "./EmployeeBasicDetails";
import EmployeeContactDetails from "./EmployeeContactDetails";
import EmployeeDeptDetails from "./EmployeeDeptDetails";

export const employeeContext = createContext();

export const EmployeeApp = () => {
  const defaultEmployee = {
    id: "",
    name: "",
    dob:'',
    email: "",
    dept:'',
    desg: "",
    salary: "",
    address:'',
    location:'',
    mob:''
  };

  const [employee, setEmployee] = useState(defaultEmployee);

  const generateEmployeeDetails = () => {
    setEmployee({
      id: '1001',
      name: 'Sreejith Kumaran',
      email: 'sreejith.kumaran@e.com',
      desg: 'Sr. Software Test Engineer',
      salary: '100000',
      dob:'01-jan-2000',
      dept:'R&D',
      address:'RMZ Ecoworld , Bellendur , Banalore-KA',
      location:'Ind-Bangalore',
      mob: '9999999999'
    });
  };

  return (
    <div>
      <h2>Click To Generate Employee Details</h2>
      <button onClick={generateEmployeeDetails}>Generate Employee Details</button>

      <employeeContext.Provider value={employee} >
        <EmployeeBasicDetails />
        <EmployeeContactDetails />
        <EmployeeDeptDetails />
      </employeeContext.Provider>
    </div>
  );
};

export default EmployeeApp