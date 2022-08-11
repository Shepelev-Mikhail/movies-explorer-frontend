import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
  return (
    <div className="register">
      <NavLink to="/" className="logo">
        <img className="logo-img" src={logo} alt="логотип"/>
      </NavLink>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" method="post" name="register__form">
        <div className="register__field">
          <p className="register__input-text">Имя</p>
          <input
            id="name-input"
            className="register__input register__input_type_name"
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            autoComplete="off"
            required
            value="Виталий"
            onChange={()=> {}}
          />
          <span className="email-input-error register__error" />
        </div>

        <div className="register__field">
          <p className="register__input-text">E-mail</p>
          <input
            id="email-input"
            className="register__input register__input_type_email"
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
          <span className="email-input-error register__error" />
        </div>

        <div className="register__field">
          <p className="register__input-text">Пароль</p>
          <input
            id="password-input"
            className="register__input register__input_type_password"
            type="password"
            name="password"
            minLength="2"
            maxLength="40"
            placeholder="Password"
            autoComplete="off"
            required
          />
          <span className="password-input-error register__error" />
        </div>
        <button className="register__submit" type="submit">Зарегистрироваться</button>
      </form>
      <Link className="register__link" to="/sign-in">Уже зарегистрированы? <span
        className="register__link-color">Войти</span></Link>
    </div>
  )
}

export default Register;
