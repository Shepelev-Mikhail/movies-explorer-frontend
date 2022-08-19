import { NavLink } from "react-router-dom";
import './Menu.css';

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

function Menu({ isOpenMenu, className, onCloseMenu }) {
  const menuJsx = menu?.map(el => {
    return (
      <NavLink
        key={el.id}
        exact
        to={el.link}
        className={`menu__item menu__item_${el.id}`}
      >
        {el.title}
      </NavLink>
    )
  })

  return (
    <>
      <div
        className={`overlay-menu ${isOpenMenu ? 'active' : ''}`}
        onClick={onCloseMenu}
      />

      <div className={`menu ${isOpenMenu ? 'open' : ''} ${className ? className : ''}`}>
        <button type="button" className="menu__btn-close" onClick={onCloseMenu}/>

        <div className="menu__list">
          {menuJsx}
        </div>

        <NavLink to="/profile" className="menu__account">
          <p className="menu__account-text">Аккаунт</p>
          <div className="menu__account-img" />
        </NavLink>
      </div>
    </>
  )
}

export default Menu;
