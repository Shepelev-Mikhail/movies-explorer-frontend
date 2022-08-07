import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from './Navigation/Navigation';

function Header(props) {
  let location = useLocation();

  return (
    <header className={`header ${location.pathname === "/" ? "header_dark" : ""}`}>
      <div className="container header__container">
        <img className="header__logo" src={logo} alt="логотип" />

        <Navigation />
      </div>
    </header>
  )
}

export default Header;