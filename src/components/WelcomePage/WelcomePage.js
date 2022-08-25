import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import logo from '../../images/logo.svg';
import './WelcomePage.css';

function WelcomePage({ title, btnSubmitName, footerText, footerLinkText, footerLinkHref, showName = false, handler, errorSubmit}) {
  const onSubmit = (data) => {
    if (showName) {
      let {name, email, password} = data
      handler({name, email, password});
      // reset();
    }
    if (!showName) {
      let {email, password} = data
      handler({email, password});
      // reset();
    }
  };

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange"
  });

  return (
    <div className="welcome-page">
      <NavLink to="/" className="logo">
        <img className="logo-img" src={logo} alt="логотип"/>
      </NavLink>
      <h2 className="welcome-page__title">{title}</h2>
      <form method="post" name="welcome-page__form" className="welcome-page__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="welcome-page__fields">
          {showName && (
            <div className="welcome-page__field">
              <label className="welcome-page__input-text">Имя</label>
              <input 
                className="welcome-page__input welcome-page__input_type_name"
                type="text"
                placeholder="Имя"
                autoComplete="off"
                {...register("name", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов"
                  },
                  maxLength: {
                    value: 40,
                    message: "Максимум 40 символов"
                  },
                  pattern: {
                    value: /^[a-zа-яё\s-]+$/,
                    message: "Используйте латиницу, кириллицу, пробел или дефис"
                  }
                })}
              />
              <div className="welcome-page__error">
                {errors?.name && 
                <span className="name-input-error welcome-page__error-text">
                  {errors?.name?.message || "Error"}
                </span>}
              </div>
            </div>
          )}

          <div className="welcome-page__field">
            <label className="welcome-page__input-text">E-mail</label>
            <input 
              className="welcome-page__input welcome-page__input_type_email"
              type="email"
              placeholder="Email"
              autoComplete="off"
              {...register("email", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символов"
                },
                maxLength: {
                  value: 40,
                  message: "Максимум 40 символов"
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Введен некорректный Email"
                }
              })}
            />
            <div className="welcome-page__error">
              {errors?.email && 
              <span className="email-input-error welcome-page__error-text">
                {errors?.email?.message || "Error"}
              </span>}
            </div>
          </div>

          <div className="welcome-page__field">
            <label className="welcome-page__input-text">Пароль</label>
            <input 
              className="welcome-page__input welcome-page__input_type_password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register("password", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символов"
                },
                maxLength: {
                  value: 40,
                  message: "Максимум 40 символов"
                },
              })}
            />
            <div className="welcome-page__error">
              {errors?.password && 
              <span className="password-input-error welcome-page__error-text">
                {errors?.password?.message || "Error"}
              </span>}
            </div>
          </div>
        </div>

        <div className="welcome-page__buttons">
          {errorSubmit && <span className="welcome-page__submit-error">{errorSubmit}</span>}
          <button className="welcome-page__submit" type="submit" disabled={!isValid}>{btnSubmitName}</button>

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
