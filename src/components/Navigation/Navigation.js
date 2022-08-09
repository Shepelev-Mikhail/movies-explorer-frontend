import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

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
  const [openMenu, updateOpenMenu] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  const handleOpenMobileMenu = () => updateOpenMenu(!openMenu);
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
          <div className="navigation__overlay" onClick={handleCloseMobileMenu} />
          <div className={`navigation__menu ${openMenu ? 'active' : ''}`}>
            <button type="button" className="navigation__menu-close" onClick={handleCloseMobileMenu} />

            <div className="navigation__menu-main">
              { menuJsx }
            </div>

            <div className="navigation__menu-buttons">
              <NavLink to="/profile" className="navigation__account">Аккаунт</NavLink>
            </div>
          </div>
          <button
              type="button"
              className={`navigation__menu-burger ${location.pathname === '/' ? 'light' : ''}`}
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
