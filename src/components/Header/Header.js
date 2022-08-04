import logo from '../../images/logo.svg';
import './Header.css';
// import account from '../../images/account.svg';
import Navigation from './Navigation/Navigation';

function Header(props) {
  return (
    <header className="header">
      <div className="container header__container">
        <img className="header__logo" src={logo} alt="логотип" />
        {/* <div className="header__unauthorized">
          <button type="button" className="header__signup">Регистрация</button>
          <button type="button" className="header__signin">Войти</button>
        </div>
        <div className="header__authorized">
          <div className="header__movies">
            <button type="button" className="header__movie">Фильмы</button>
            <button type="button" className="header__save-movie">Сохраненные фильмы</button>
          </div>
          <div className="header__account">
            <button type="button" className="header__account-link">Аккаунт</button>
            <img className="header__account-icon" src={account} alt="иконка" />
          </div>
        </div> */}
        <Navigation />
      </div>
    </header>
  )
}

export default Header;