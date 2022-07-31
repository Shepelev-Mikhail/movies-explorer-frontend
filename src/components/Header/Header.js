import logo from '../../images/logo.svg'
import './Header.css'

function Header(props) {
  return (
    <header className="header">
    <img className="header__logo" src={logo} alt="" />
    <div >
      <button type="button">Регистрация</button>
      <button type="button">Войти</button>
      <button type="button">Фильмы</button>
      <button type="button">Сохраненные фильмы</button>
      <button type="button">Аккаунт</button>
    </div>
  </header>
  )
}

export default Header;