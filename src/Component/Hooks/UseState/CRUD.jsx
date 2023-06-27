import React from "react";
import { useState } from "react";

function CRUD() {
  const [name, setName] = useState("");
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(false)
  const [editIndex, setEditIndex ] = useState()

  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData((newData) => [...newData, name]);
      //setAllData([...allData, name])
      setName('');
    }

  };

  const handleUpdate = () => {
    allData.splice(editIndex, 1, name)
    setAllData([...allData])
    setShow(false)
    setName('');

  }

  const handleDelete = (index) => {
    console.log(index);
    allData.splice(index, 1)
    setAllData([...allData])
  };

  const handleEdit = (index) => {
    console.log(index);
    setName(allData[index])
    setShow(true)
    setEditIndex(index)
    
  };

  return (
    <div>
      <h3>CRUD - Insert | Update | Delete</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button> */}
      {!show ? <button onClick={handleAdd}>Add</button> : <button onClick={handleUpdate}>Update</button> }
      <div>
        {allData.map((val, index) => (
          <div>
            <h3>{val}</h3>
            <button onClick={()=>handleEdit(index)}>Edit</button>
            {/* <button onClick={handleDelete(index)}>Delete</button> */}
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CRUD;
