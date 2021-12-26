import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostsList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        Посты не найдены
      </h1>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) =>
        <div>
          <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
        </div>
      )
      }
    </div>
  );
};

export default PostsList;