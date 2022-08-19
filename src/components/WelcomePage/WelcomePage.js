import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from '../../images/logo.svg';
import './WelcomePage.css';

function WelcomePage({ title, btnSubmitName, footerText, footerLinkText, footerLinkHref, showName = false }) {
  let initForm = {
    email: '',
    password: ''
  };
  if (showName) initForm.name = '';
  const [formParams, setFormParams] = useState(initForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!formParams.email || !formParams.password || (showName && !formParams.name)) {
      return;
    }
  }

  return (
    <div className="welcome-page">
      <NavLink to="/" className="logo">
        <img className="logo-img" src={logo} alt="логотип"/>
      </NavLink>
      <h2 className="welcome-page__title">{title}</h2>
      <form method="post" name="welcome-page__form" className="welcome-page__form" onSubmit={handleSubmit}>
        <div className="welcome-page__fields">
          {showName && (
            <div className="welcome-page__field">
              <label className="welcome-page__input-text">Имя</label>
              <input
                id="name-input"
                className="welcome-page__input welcome-page__input_type_name"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              <span className="email-input-error welcome-page__error"/>
            </div>
          )}

          <div className="welcome-page__field">
            <label className="welcome-page__input-text">E-mail</label>
            <input
              id="email-input"
              className="welcome-page__input welcome-page__input_type_email"
              type="email"
              name="email"
              minLength="2"
              maxLength="40"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={handleChange}
            />
            <span className="email-input-error welcome-page__error" />
          </div>

          <div className="welcome-page__field">
            <label className="welcome-page__input-text">Пароль</label>
            <input
              id="password-input"
              className="welcome-page__input welcome-page__input_type_password"
              type="password"
              name="password"
              minLength="2"
              maxLength="40"
              placeholder="Password"
              autoComplete="off"
              required
              onChange={handleChange}
            />
            <span className="password-input-error welcome-page__error" />
          </div>
        </div>

        <div className="welcome-page__buttons">
          <button className="welcome-page__submit" type="submit">{btnSubmitName}</button>

          <div className="welcome-page__footer">
            {footerText}
            <Link to={footerLinkHref} className="welcome-page__footer-link">{footerLinkText}</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default WelcomePage;
