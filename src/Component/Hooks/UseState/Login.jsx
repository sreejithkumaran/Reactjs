import React from "react";
import { useState } from "react";

const Login = () => {

    // https://www.youtube.com/watch?v=EYpdEYK25Dc
    const  initialValues = {username:'', email:'', password:''}
    const [formValues, setFormValues] = useState(initialValues)
    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name ]: value })
        console.log(formValues)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormError(validate(formValues))
        setIsSubmit(true)
    }

    const validate = (values) => {
        const errors = {}
        const regex = /\S+@\S+\.\S+/

        if(!values.username) {
            errors.username = 'Username is required !'
        }

        if(!values.email) {
            errors.username = 'Email is required !'
        }

        if(!values.password) {
            errors.username = 'Passoword is required !'
        }
        
        return errors;
    }

  return (
    <div>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <h2> Login Form</h2>
        <div>
          <label >User Name : </label>
          <input type="text" 
          name="username" 
          value={formValues.username} 
          onChange={handleChange}
          placeholder="username" />
        </div>
        <div>
          <label>Email     : </label>
          <input type="text" 
          name="email" 
          value={formValues.email} 
          onChange={handleChange}
          placeholder="email" />
        </div>
        <div>
          <label>User Name : </label>
          <input type="text" 
          name="password" 
          value={formValues.password} 
          onChange={handleChange}
          placeholder="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
