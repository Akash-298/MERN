import React from 'react';

const PureCounter = React.memo(({ count }) => {
  console.log('PureCounter Rendered');
  return <div>Count: {count}</div>;
});


function App() {
 const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <PureCounter count={count} />
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
