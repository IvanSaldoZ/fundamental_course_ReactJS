import React, {useState} from "react";
import './styles/App.css';
import PostsList from "./components/PostsList";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Тестовый пост", body: "Это просто текст поста"},
    {id: 2, title: "JavaScript", body: "Это фронт"},
    {id: 3, title: "Python", body: "Любимый язык"},
    {id: 4, title: "Yoohooo", body: "Текст поста"},
  ])

  const [title, setTitle] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста" value={title} onChange={e => setTitle(e.target.value)}/>
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostsList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;
