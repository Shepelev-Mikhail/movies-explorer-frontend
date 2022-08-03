import logo from '../../images/logo.svg'
import './Header.css'

function Header(props) {
  return (
    <header className="header">
      <div className="container header__container">
        <img className="header__logo" src={logo} alt="логотип" />
        <div>
          <div className="header__unauthorized">
            <button type="button" className="header__signup">Регистрация</button>
            <button type="button" className="header__signin">Войти</button>
          </div>
          <div className="header__authorized">
            <div className="header__movies">
              <button type="button" className="header__movies">Фильмы</button>
              <button type="button" className="header__save-movies">Сохраненные фильмы</button>
            </div>
            <button type="button" className="header__account">Аккаунт</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;