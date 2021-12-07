import PageWithAuthForm from "./PageWithAuthForm";
import api from "../utils/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
  const [stateRegister, setStateRegister] = useState({
    email: "",
    message: "",
  });
  const history = useHistory();
  console.log(stateRegister);

  function onRegister(data) {
    api
      .register(data)
      .then((res) => {
        if (res.statusCode !== 400) {
          // -- показать попап Хорошо
          setStateRegister({
            email: res.data.email,
            message: "Вы успешно зарегистрировались!",
          });
          history.push("/sign-in");
        } else {
          // 400 - некорректно заполнено одно из полей
          setStateRegister({
            message: "Что-то пошло не так! Попробуйте ещё раз.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
