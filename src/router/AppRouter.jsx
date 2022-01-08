import React, {useContext} from 'react';
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error404 from "../pages/error404";
import PostIdPage from "../pages/PostIdPage";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Error403 from "../pages/error403";
import {AuthContext} from "../context";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)
  console.log(isAuth)
  // В 6м роутере много классных обновлений
  // https://habr.com/ru/company/kts/blog/598835/
  return (
    isAuth
      ? <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Posts/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="posts" element={<Posts/>}/>
          <Route path="posts/:id" element={<PostIdPage/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
      : <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Posts/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="posts" element={<Error403/>}/>
          <Route path="posts/:id" element={<Error403/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
  );
};

export default AppRouter;