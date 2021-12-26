import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Тестовый пост", body: "Это просто текст поста"},
    {id: 2, title: "JavaScript", body: "Это фронт"},
    {id: 3, title: "Python", body: "Любимый язык"},
    {id: 4, title: "Yoohooo", body: "Текст поста"},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})

  // хук useMemo кэширует состояние переменной и перечитывает это значение только тогда,
  // когда изменились dependencies (deps) - свойства, т.е. второй аргумент хука useMemo
  const sortedPosts = useMemo(() => {
    // Если не пустая строка
    if (filter.sort) {
      // Сортируем копию массива - для этого надо его развернуть ([...posts])
      // Для сортировки используется функция localeCompare, которая сравнивает строки
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAdnSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

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
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostsList remove={removePost} posts={sortedAdnSearchedPosts} title="Список постов"/>
    </div>
  );
}

export default App;
