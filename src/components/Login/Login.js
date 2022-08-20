import React from "react";
import WelcomePage from "../WelcomePage/WelcomePage";

function Login(props) {
  return (
    <WelcomePage
      title="Рады видеть!"
      btnSubmitName="Войти"
      footerText="Ещё не зарегистрированы?"
      footerLinkText="Регистрация"
      footerLinkHref="/signup"
      handler={props.handleLogin}
      errorSubmit={props.errorSubmit}
    />
  )
}

export default Login;
