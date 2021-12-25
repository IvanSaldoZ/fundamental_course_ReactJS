import React, {useState} from "react";
import './styles/App.css';
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Тестовый пост", body: "Это просто текст поста"},
    {id: 2, title: "JavaScript", body: "Это фронт"},
    {id: 3, title: "Python", body: "Любимый язык"},
    {id: 4, title: "Yoohooo", body: "Текст поста"},
  ])

  return (
    <div className="App">
      <PostsList posts={posts}/>
    </div>
  );
}

export default App;
