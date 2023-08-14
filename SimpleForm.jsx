import React from "react";
// import useState from 'react';
import { useState } from 'react';


// import React from 'react'

const SimpleForm =()=> {
 
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheck = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
    setCheckedItems(checkedItems.filter((i) => i !== item));
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item)}
            checked={checkedItems.includes(item)}
          />
          {item}
          {checkedItems.includes(item) && (
            <button onClick={() => handleDelete(item)}>Delete</button>
          )}
        </li>
      ))}
    </ul>

    // <div>
    //   {items.map((item) =>(
    //     <div key ={item}>
    //       {item}
    //       <button onClick={()=>handleDelete(item)}>
    //         Delete
    //       </button>

    //       </div>
    //   )
    //   )}
     
    // </div>
  );
}

export default SimpleForm
