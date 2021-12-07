import PageWithAuthForm from "./PageWithAuthForm";
import api from "../utils/api";

function Login({ handleTokenCheck }) {
  function onLogin(data) {
    api.login(data).then((res) => {
      localStorage.setItem("token", res.token);
      handleTokenCheck();
      // 400 - не передано одно из полей
      // 401 - пользователь с email не найден
    }).catch((err) => {
      console.log(err);
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
