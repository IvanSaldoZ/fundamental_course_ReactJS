import React, {useState} from "react";

function App() {
  // Назначаем для счетчика состояние
  // Делаем реструктуризацию
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Какое-то значение')

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>Likes {likes}</h1>
      <h1>Value {value}</h1>
      <input type="text"
             value={value}
             onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}>Up!</button>
      <button onClick={decrement}>Down!</button>
    </div>
  );
}

export default App;
