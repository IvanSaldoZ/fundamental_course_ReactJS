import React, {useState} from "react";
import './styles/App.css';
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

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
        <MySelect
          defaultValue="Сортировка по"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostsList remove={removePost} posts={posts} title="Список постов"/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
