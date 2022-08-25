import React from "react";
import WelcomePage from "../WelcomePage/WelcomePage";

function Register(props) {
  return (
    <WelcomePage
      showName={true}
      title="Добро пожаловать!"
      btnSubmitName="Зарегистрироваться"
      footerText="Уже зарегистрированы?"
      footerLinkText="Войти"
      footerLinkHref="/signin"
      handler={props.handleRegister}
      errorSubmit={props.errorSubmit}
    />
  )
}

export default Register;
