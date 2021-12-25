import React, {useState} from "react";

function App() {
  // Назначаем для счетчика состояние
  // Делаем реструктуризацию
  const [likes, setLikes] = useState(0)

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>Likes {likes}</h1>
      <button onClick={increment}>Up!</button>
      <button onClick={decrement}>Down!</button>
    </div>
  );
}

export default App;
