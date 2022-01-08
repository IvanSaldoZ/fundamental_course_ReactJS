import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import MyButton from "../button/MyButton";
import {useNavigate} from "react-router";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
    // Редирект на страницу About
    router(`/about`)
  }

  const router = useNavigate()

  return (
    <div className="navbar">
      {isAuth
        ? <MyButton onClick={logout}>
          Выйти
        </MyButton>
        : <Link to="/login">
          Войти
        </Link>
      }
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;