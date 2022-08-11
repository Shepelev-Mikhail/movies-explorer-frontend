import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <NavLink to="/" className="logo">
        <img className="logo-img" src={logo} alt="логотип"/>
      </NavLink>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" method="post" name="login__form">
        <div className="login__field">
          <label className="login__input-text">E-mail</label>
          <input
            id="email-input"
            className="login__input login__input_type_email"
            type="email"
            name="email"
            minLength="2"
            maxLength="40"
            placeholder="Email"
            autoComplete="off"
            required
            value="pochta@yandex.ru"
            onChange={()=> {}}
          />
          <span className="email-input-error login__error" />
        </div>

        <div className="login__field">
          <label className="login__input-text">Пароль</label>
          <input
            id="password-input"
            className="login__input login__input_type_password"
            type="password"
            name="password"
            minLength="2"
            maxLength="40"
            placeholder="Password"
            autoComplete="off"
            required
            onChange={()=> {}}
          />
          <span className="password-input-error login__error" />
        </div>
        <button className="login__submit" type="submit">Войти</button>
      </form>
      <Link className="login__link" to="/sign-up">Ещё не зарегистрированы? <span
        className="login__link-color">Регистрация</span></Link>
    </div>
  )
}

export default Login;
