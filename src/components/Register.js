import { useState } from "react";
import PageWithForm from "./PageWithForm";

function Register(props) {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });

  function handleChange(e) {
    setInputValues((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister({
      email: inputValues.email,
      password: inputValues.password,
    });
  }
  return (
    <PageWithForm
      onSubmit={handleSubmit}
      name={"register"}
      title={"Регистрация"}
      textButtonSubmit={"Зарегистрироваться"}
    >
      <fieldset className="form__input-container">
        <label className="form__field">
          <input
            value={inputValues.email}
            onChange={handleChange}
            id="email"
            className="form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <span id="place-error" className="form__error"></span>
        </label>
        <label className="form__field">
          <input
            value={inputValues.password}
            onChange={handleChange}
            id="password"
            className="form__input"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <span id="link-error" className="form__error"></span>
        </label>
      </fieldset>
    </PageWithForm>
  );
}

export default Register;
