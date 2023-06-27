import { func } from "prop-types";
import React from "react";
import { useState } from "react";

function CRUDSample01() {
  const list = [
    {
      id: 1,
      name:'HP',
      price: "2222",
    },
    {
      id: 2,
      name: 'Dell',
      price: "2445",
    },
  ];

  const [lists, setList] = useState(list)

  return <div>
    <h2>Laptop List</h2>
    <div>
        <AddList setList = {setList} />
    </div>
    <table align='center' border={1}>
        {
            list.map((current) => (
                <tr>
                    <td>{current.name}</td>
                    <td>{current.price}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))
        }
    </table>
  </div>;
}

function AddList({setList}) {
    
    function handleSubmit(event){
        event.preventDefault();
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value

        const newList = {
            id : 3,
            name,
            price
        }

        setList((prevList) => {
            return prevList.concat(newList)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Enter Name' />
            <input type='text' name='price' placeholder='Enter Price' />
            <button type='submit'>Add</button>

        </form>
    )
}

export default CRUDSample01;