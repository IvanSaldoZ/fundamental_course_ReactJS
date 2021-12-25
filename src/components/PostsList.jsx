import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostsList = ({posts}) => {
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