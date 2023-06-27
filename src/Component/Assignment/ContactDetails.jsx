import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contactDetails } from "./AddUserContact";


const ContactDetails = () => {
  const navigate = useNavigate();

  const details = useContext(contactDetails)

  const records = 0;
  const [noOfRecords, setNoOfRecords] = useState(records);
  const [userContactDetails, setContactDetails] = useState(details);

  const navigateToAddUserContact = (e) => {
    navigate("/addContact");
  };

  return (
    <div>
      <h3>User Contact Details</h3>
      <div>{!records ? "No user record found" : ""}</div>
      <table align="center">
        <thead>
          <tr>
            <td>
              <input placeholder="search by first name"></input>
            </td>

            <td>
              <button onClick={navigateToAddUserContact}>Create User</button>
            </td>
          </tr>
        </thead>
      </table>
      <div></div>
      <table border={1} align="center">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email Id</td>
            <td>Phone</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>Total Records displayed : {records}</div>
    </div>
  );
};

export default ContactDetails;
