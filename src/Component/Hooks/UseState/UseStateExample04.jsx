
import React, { useState } from "react";

function UseStateExample04() {
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setList([...list,`item-${list.length}`])
  }

  const handleRemove = () => {
    if(list.length > 0){
      const lastIndex = list.length - 1
      setList(list.filter((list, index) => index !== lastIndex))
    }
  }

  return (
    <div>
      <div>List : {list.length} total item</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Add</button>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default UseStateExample04;
