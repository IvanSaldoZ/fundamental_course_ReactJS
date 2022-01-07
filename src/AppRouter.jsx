import React from 'react';
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error404 from "./pages/error404";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/*" element={<Error404/>}/>
    </Routes>
  );
};

export default AppRouter;