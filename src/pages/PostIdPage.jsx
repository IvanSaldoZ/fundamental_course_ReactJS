import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getPostById(id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
  }, [])

  return (
    <div>
      {isLoading
        ? <Loader/>
        : <div>
          Вы попали на страницу поста {params.id}

          <h1>
            {post.title}
          </h1>
          <p>
            {post.body}
          </p>
        </div>
      }
    </div>
  );
};

export default PostIdPage;