import PageWithAuthForm from "./PageWithAuthForm";
import api from "../utils/api";

function Login() {
  function onLogin(data) {
    api.login(data).then((res) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      // 400 - не передано одно из полей
      // 401 - пользователь с email не найден
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
