import { useEffect, useState } from "react";
import './Navigation.css';
import account from '../../../images/account.svg';

function Navigation() {
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   setLoggedIn(false);
  // }, [])

  return (
    <>
      {loggedIn ? (
        <div className="navigation__authorized">
          <div className="navigation__movies">
            <button type="button" className="navigation__movie">Фильмы</button>
            <button type="button" className="navigation__save-movie">Сохраненные фильмы</button>
          </div>
          <div className="navigation__account">
            <button type="button" className="navigation__account-link">Аккаунт</button>
            <img className="navigation__account-icon" src={account} alt="иконка" />
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