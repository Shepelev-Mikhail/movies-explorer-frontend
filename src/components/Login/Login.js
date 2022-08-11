import React from "react";
import WelcomePage from "../WelcomePage/WelcomePage";

function Login() {
  return (
    <WelcomePage
      title="Рады видеть!"
      btnSubmitName="Войти"
      footerText="Ещё не зарегистрированы?"
      footerLinkText="Регистрация"
      footerLinkHref="/sign-up"
    />
  )
}

export default Login;
