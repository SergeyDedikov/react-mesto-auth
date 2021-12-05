import PageWithAuthForm from "./PageWithAuthForm";
import api from "../utils/api";

function Register() {
  function onRegister(data) {
    api.register(data).then((res) => {
      console.log(res);
      // -- если ОК показать попап Хорошо
      // -- иначе Плохо
      // 400 - некорректно заполнено одно из полей
    })
  }

  return (
    <PageWithAuthForm
      onSubmit={onRegister}
      name={"register"}
      title={"Регистрация"}
      textButtonSubmit={"Зарегистрироваться"}
    >
      <p className="authentication__question">Уже зарегистрированы? Войти</p>
    </PageWithAuthForm>
  );
}

export default Register;
