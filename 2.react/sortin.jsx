import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 24 }
  ]);

  const sortByAge = () => {
    const sortedUsers = [...users].sort((a, b) => a.age - b.age);
    setUsers(sortedUsers);
  };

  return (
    <div>
      <button onClick={sortByAge}>Sort by age</button>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
