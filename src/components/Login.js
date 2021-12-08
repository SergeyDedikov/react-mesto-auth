import PageWithAuthForm from "./PageWithAuthForm";
import api from "../utils/api";

function Login({ handleTokenCheck, onInfoTooltip, message }) {
  function onLogin(data) {
    api
      .login(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        handleTokenCheck();
      })
      .catch((err) => {
        onInfoTooltip(false);
        if (err === "400") {
          message("Не передано одно из полей. Попробуйте ещё раз.");
        }
        if (err === "401") {
          message("Пользователь с email не найден. Попробуйте ещё раз.");
        }
      });
  }

  return (
    <PageWithAuthForm
      onSubmit={onLogin}
      name={"login"}
      title={"Вход"}
      textButtonSubmit={"Войти"}
    />
  );
}

export default Login;
