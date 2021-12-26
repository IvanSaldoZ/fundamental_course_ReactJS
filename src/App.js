import React, {useState} from "react";
import './styles/App.css';
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Тестовый пост", body: "Это просто текст поста"},
    {id: 2, title: "JavaScript", body: "Это фронт"},
    {id: 3, title: "Python", body: "Любимый язык"},
    {id: 4, title: "Yoohooo", body: "Текст поста"},
  ])

  const createPost = (newPost) => {
    setPosts([...posts,  newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostsList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;
