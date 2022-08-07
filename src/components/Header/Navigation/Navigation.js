import { useEffect, useState } from "react";
import './Navigation.css';
import { useLocation } from "react-router-dom";

function Navigation() {
  let location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  return (
    <>
      {loggedIn ? (
        <div className={`navigation__authorized ${location.pathname === "/" ? "navigation__authorized_theme-dark" : ""}`}>
          <div className="navigation__movies">
            <button type="button" className="navigation__movie">Фильмы</button>
            <button type="button" className="navigation__save-movie">Сохраненные фильмы</button>
          </div>
          <div className="navigation__account">
            <button type="button" className="navigation__account-link">Аккаунт</button>
            <div className="navigation__account-icon" />
          </div>
        </div>
      ) : (
        <div className="navigation__unauthorized">
          <button type="button" className="navigation__signup">Регистрация</button>
          <button type="button" className="navigation__signin">Войти</button>
        </div>
      )}
      
    </>
  )
}

export default Navigation;