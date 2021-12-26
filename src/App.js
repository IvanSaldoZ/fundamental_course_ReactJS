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

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      ...post,
    }
    setPosts([...posts, newPost])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostsList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;
