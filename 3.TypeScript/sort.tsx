
import React, { useState, useEffect } from 'react';

const App = () => {
  const [alphabets, setAlphabets] = useState(['e', 'b', 'c', 'a', 'd']);

  useEffect(() => {
    const sortedAlphabets = [...alphabets].sort();
    setAlphabets(sortedAlphabets);
  }, []);

  return (
    <div>
      <h2>Sorted Alphabets:</h2>
      {alphabets.map((alphabet, index) => (
        <p key={index}>{alphabet}</p>
      ))}
    </div>
  );
};

export default App;
