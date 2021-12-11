import PageWithAuthForm from "./PageWithAuthForm";
import api from "../utils/api";

function Login({ handleTokenCheck, showInfoTooltip, changeMessage }) {
  function onLogin(data) {
    api
      .login(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        handleTokenCheck();
      })
      .catch((err) => {
        showInfoTooltip(false);
        if (err === "400") {
          changeMessage("Не передано одно из полей. Попробуйте ещё раз.");
        }
        if (err === "401") {
          changeMessage("Пользователь с email не найден. Попробуйте ещё раз.");
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
