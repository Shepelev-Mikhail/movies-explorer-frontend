import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to="/" className="header__logo">
          <img className="header__logo-img" src={logo} alt="логотип" />
        </NavLink>

        <Navigation />
      </div>
    </header>
  )
}

export default Header;