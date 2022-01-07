import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getPostById(id)
    setPost(response.data)
  })
  const [fetchComments, isLoadingComments, errorComments] = useFetching(async (id) => {
    const response = await PostService.getCommentsForPostById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      Вы попали на страницу поста {params.id}
      {isLoading
        ? <Loader/>
        : <div>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
        </div>
      }
      <h2>Комментарии</h2>
      {isLoadingComments
        ? <Loader/>
        : <div>
          <p>{comments.map(comment =>
            <div style={{marginTop: 15}}>
              <h5> {comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          )}</p>
        </div>
      }
    </div>
  );
};

export default PostIdPage;