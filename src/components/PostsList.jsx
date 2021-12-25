import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostsList = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: "Тестовый пост", body: "Это просто текст поста"},
    {id: 2, title: "JavaScript", body: "Это фронт"},
    {id: 3, title: "Python", body: "Любимый язык"},
    {id: 4, title: "Yoohooo", body: "Текст поста"},
  ])

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Список постов</h1>
      {posts.map(post =>
        <div>
          <PostItem post={post} key={post.id}/>
        </div>
      )
      }
    </div>
  );
};

export default PostsList;