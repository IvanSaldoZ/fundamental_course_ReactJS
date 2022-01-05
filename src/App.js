import React, {useEffect, useState} from "react";
import './styles/App.css';
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPosts()
  }, [])


  const createPost = (newPost) => {
    setPosts([...posts,  newPost])
    setModal(false);
  }

  async function fetchPosts() {
    setIsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts)
      setIsLoading(false)
    }, 1000)
  }

  // Пост получаем из дочернего компонента
  const removePost = (post) => {
    // filter возвращает копию массива, отфильтрованного по какому-то условию
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>
        Получить данные
      </MyButton>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isLoading
        ? <h1>Loading...</h1>
        : <PostsList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
      }
    </div>
  );
}

export default App;
