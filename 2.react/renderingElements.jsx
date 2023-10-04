import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));  // yha pe item.id hai😲
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <span>{item.id}: {item.name}</span>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
