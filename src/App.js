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

  // Пост получаем из дочернего компонента
  const removePost = (post) => {
    // filter возвращает копию массива, отфильтрованного по какому-то условию
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <select>
          <option value="value1">По названию</option>
          <option value="value2">По описанию</option>
        </select>
      </div>

      {posts.length !== 0
        ? <PostsList remove={removePost} posts={posts} title="Список постов"/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
