import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './Navigation.css';
import Menu from "../Menu/Menu";

const menu = [
  {
    id: 'main',
    link: '/',
    title: 'Главная'
  },
  {
    id: 'movies',
    link: '/movies',
    title: 'Фильмы'
  },
  {
    id: 'savedMovies',
    link: '/saved-movies',
    title: 'Сохранённые фильмы'
  }
]

function Navigation() {
  let location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenMenu, updateOpenMenu] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  const handleOpenMobileMenu = () => updateOpenMenu(!isOpenMenu);
  const handleCloseMobileMenu = () => updateOpenMenu(false);

  useEffect(() => {
    updateOpenMenu(false);
  }, [location])

  const menuJsx = menu?.map(el => {
    return (
      <NavLink
        key={el.id}
        exact
        to={el.link}
        className={`navigation__item`}
      >
        {el.title}
      </NavLink>
    )
  })

  return (
    <div className="navigation">
      {loggedIn ? (
        <>
          <Menu isOpenMenu={isOpenMenu} onCloseMenu={handleCloseMobileMenu} className={location.pathname === '/' ? 'light' : ''} />

          <button
            type="button"
            className={`navigation__burger ${location.pathname === '/' ? 'light' : ''}`}
            onClick={handleOpenMobileMenu}
          />
        </>
      ) : (
        <div className="navigation__buttons">
          <NavLink to="/signup" className="navigation__signup">Регистрация</NavLink>
          <NavLink to="/signin" className="navigation__signin">Войти</NavLink>
        </div>
      )}
    </div>
  )
}

export default Navigation;
