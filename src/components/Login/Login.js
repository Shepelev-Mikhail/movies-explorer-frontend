import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="authorization container">
      <h2 className="authorization__title">Рады видеть!</h2>
      <form className="authorization__form" method="post" name="register__form" onSubmit={() => (console.log('клик'))}>
        <div className="authorization__field">
          <input
            id="email-input"
            className="authorization__input authorization__input_type_email"
            type="email"
            name="email"
            minLength="2"
            maxLength="40"
            placeholder="Email"
            autoComplete="off"
            required
            onChange={() => (console.log('клик'))}
          />
          <span className="email-input-error authorization__error"></span>
        </div>

        <div className="authorization__field">
          <input
            id="password-input"
            className="authorization__input authorization__input_type_password"
            type="password"
            name="password"
            minLength="2"
            maxLength="40"
            placeholder="Password"
            autoComplete="off"
            required
            onChange={() => (console.log('клик'))}
          />
          <span className="password-input-error authorization__error"></span>
        </div>
        <button className="authorization__submit" type="submit">Войти</button>
      </form>
      <Link className="authorization__link" to="/sign-in">Ещё не зарегистрированы? Регистрация</Link>
    </div>
  )
}

export default Login;