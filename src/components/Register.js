import { useHistory, Link } from "react-router-dom";
import PageWithAuthForm from "./PageWithAuthForm";
import api from "../utils/api";

function Register({ showInfoTooltip, changeMessage }) {
  const history = useHistory();

  function onRegister(data) {
    api
      .register(data)
      .then((res) => {
        if (res.statusCode !== 400) {
          changeMessage("Вы успешно зарегистрировались!");
          // -- показать попап Хорошо
          showInfoTooltip(true);
          setTimeout(() => {
            history.push("/sign-in");
          }, 2000);
        }
      })
      .catch((err) => {
        showInfoTooltip(false);
        if (err === "400") {
          changeMessage("Некорректно заполнено одно из полей. Попробуйте ещё раз.");
        }
      });
  }

  return (
    <PageWithAuthForm
      onSubmit={onRegister}
      name={"register"}
      title={"Регистрация"}
      textButtonSubmit={"Зарегистрироваться"}
    >
      <p className="authentication__text">
        Уже зарегистрированы?{" "}
        <span>
          <Link to="/sign-in" className="button link">
            Войти
          </Link>
        </span>
      </p>
    </PageWithAuthForm>
  );
}

export default Register;
