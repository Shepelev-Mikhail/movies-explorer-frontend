import React from "react";
import WelcomePage from "../WelcomePage/WelcomePage";

function Register() {
  return (
    <WelcomePage
      showName={true}
      title="Добро пожаловать!"
      btnSubmitName="Зарегистрироваться"
      footerText="Уже зарегистрированы?"
      footerLinkText="Войти"
      footerLinkHref="/sign-in"
    />
  )
}

export default Register;
