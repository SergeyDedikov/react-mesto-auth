import PageWithAuthForm from "./PageWithAuthForm";
import api from "../utils/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
  const [message, setMessage] = useState("");
  const history = useHistory();

  function onRegister(data) {
    api
      .register(data)
      .then((res) => {
        if (res.statusCode !== 400) {
          setMessage("Вы успешно зарегистрировались!");
          // -- показать попап Хорошо
          setTimeout(() => {
            history.push("/sign-in");
          }, 3000);
        } else {
          // 400 - некорректно заполнено одно из полей
          setMessage("Что-то пошло не так! Попробуйте ещё раз.");
        }
      })
      .catch((err) => {
        console.log(err);
        // -- показать попап Плохо
      });
  }
  console.log(message);

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
