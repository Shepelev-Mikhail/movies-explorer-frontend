import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to="/" className="logo">
          <img className="logo-img" src={logo} alt="логотип" />
        </NavLink>

        <Navigation loggedIn={props.loggedIn}/>
      </div>
    </header>
  )
}

export default Header;