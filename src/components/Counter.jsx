import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }


  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={increment}>Up!</button>
      <button onClick={decrement}>Down!</button>
    </div>
  );
};

export default Counter;