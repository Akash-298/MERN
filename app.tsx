import React, { useState, useEffect } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState([5, 2, 3, 1, 4]);

  useEffect(() => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    setNumbers(sortedNumbers);
  }, []);

  return (
    <div>
      <h2>Sorted Numbers:</h2>
      {numbers.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </div>
  );
};

export default App;
