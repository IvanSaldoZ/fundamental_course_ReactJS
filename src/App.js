import React, {useEffect, useState} from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import {AuthContext} from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    // Контекст - авторизация
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
