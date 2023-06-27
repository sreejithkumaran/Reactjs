
import React, { useState } from "react";

function UseStateExample03() {
  const [name, setName] = useState();
  const [names, setNames] = useState([]);

  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName('')
  }

  return (
    <div>
      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="add Names"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
        <hr></hr>
        <ul>
            { names.map((item) => (
                <li key={item.id} >{item.name}</li>
            ))}
        </ul>
      </form>
    </div>
  );
}

export default UseStateExample03;
