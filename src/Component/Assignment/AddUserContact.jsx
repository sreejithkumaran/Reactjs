import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const contactDetails = createContext();

const AddUserContact = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNo: "",
  };

  const [fromValue, setFormValues] = useState(initialValues);
  const [fromError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [editClick, setEditClick] = useState(false);

  const handleValidation = (e) => {

    const { name, value } = e.target;

    setFormValues({
      ...fromValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkError = setFormError(validationForm(fromValue));

    // if(Object.keys(checkError).length === 0){
    //   navigate("/");
    // }
    setSubmit(true);

   
  };

  const validationForm = (value) => {
    const errors = {};
    const emailPattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const alphabetPattern = /^[A-Za-z]+$/
    const numberPattern = /^[0-9\b]+$/

    if (!value.firstName) {
      errors.firstName = 'Enter FirstName';
    }else if(!alphabetPattern.test(value.firstName)){
      errors.firstName = 'Enter only alphabets in FirstName';
    }

    if (!value.lastName) {
      errors.lastName = "Enter LastName";
    }else if(!alphabetPattern.test(value.lastName)){
      errors.lastName = 'Enter only alphabets in LastName';
    }

    if (!value.emailId) {
      errors.emailId = "Enter Email";
    }else if(!emailPattern.test(value.emailId)){
      errors.emailId = "Enter Vaild Email";
    }

    if (!value.phoneNo) {
      errors.phoneNo = "Enter Phone No";
    }else if(!numberPattern.test(value.phoneNo)){
      errors.phoneNo = "Enter Vaild Phone No";
    }

    return errors;
  };

  const cancelbtn = () => {
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Add Contact Details</h3>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={fromValue.firstName}
            onChange={handleValidation}
          ></input>
          <span>{fromError.firstName}</span>
        </div>
        <p></p>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={fromValue.lastName}
            onChange={handleValidation}
          ></input>
          <span>{fromError.lastName}</span>
        </div>
        <p></p>
        <div>
          <label>Email Id: </label>
          <input
            type="text"
            name="emailId"
            value={fromValue.emailId}
            onChange={handleValidation}
          ></input>
          <span>{fromError.emailId}</span>
        </div>
        <p></p>
        <div>
          <label>Phone No: </label>
          <input
            type="text"
            name="phoneNo"
            value={fromValue.phoneNo}
            onChange={handleValidation}
          ></input>
          <span>{fromError.phoneNo}</span>
        </div>
        <p></p>
        <div>
          <button type="submit">{editClick ? "Update" : "Add"}</button>
          <button type="submit" onClick={cancelbtn}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserContact;

//https://www.youtube.com/watch?v=1RrRwZ7qwOQ

//https://bobbyhadz.com/blog/react-check-if-email-is-valid

//https://aguidehub.com/blog/how-to-allow-only-numbers-in-input-field-react/

//https://fontawesomeicons.com/fa/react-js-input-field-allow-only-alphabets-and-number

// https://www.cluemediator.com/allow-only-alphabets-in-the-input-field-in-react

/* CRUD  UseState + UseContext
https://www.youtube.com/watch?v=5KZ1XBcSaH4
https://www.youtube.com/watch?v=_1QtdnqHq8I

Shopping Cart
https://www.youtube.com/watch?v=gQ_l-1zpVBo&t=878s

*/