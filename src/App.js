import React, {useState} from "react";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState('Какое-то значение')

  return (
    <div className="App">
      <PostItem post={{id: 1, title: "Тестовый пост", body: "Это просто текст поста"}}/>
    </div>
  );
}

export default App;
