import React from "react";
import { useState } from "react";

const UserCRUD = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);

  const [editClick, setEditClick] = useState(false)

  const [editIndex, setEditIndex] = useState('');

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(editClick){
        const tempTableData = tableData
        Object.assign(tempTableData[editIndex], inputs)
        setTableData([...tempTableData])
        setEditClick(false)
        setInputs({
            name: '',
            email: ''
        })
    }else{
        setTableData([...tableData, inputs]);
        setInputs({
            name: '',
            email: ''
        })
    }
  };

  const handleDelete = (index) => {
    console.log('Delete item at index : '+index)
    const filterData = tableData.filter((item, i) => i !== index)
    console.log(filterData)
    setTableData(filterData)
  }

  const handleEdit = (index) => {
    const tempData = tableData[index] 
    setInputs(
        {
            name: tempData.name,
            email: tempData.email
        }
    )
    setEditClick(true)
    setEditIndex(index)
  }

  console.log("tableData", tableData);
  return (
    <div>
      <h2> User CRUD</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name : </label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Enter user name .."
          ></input>
        </div>
        <div>
          <label> Email : </label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Enter email id .."
          ></input>
        </div>
        <button type="submit">
            {editClick ? 'Update' : 'Add'}
            </button>
        <div></div>
      </form>
      <div>
        <table align="center" border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  {/* <button onClick={handleDelete(index)}>Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCRUD;
