import React from 'react';
import Navbar from "../components/UI/navbar/Navbar";
import {Outlet} from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;