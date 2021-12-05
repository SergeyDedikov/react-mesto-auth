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
      <fieldset className="popup__input-container">
        <label className="popup__field">
          <input
            value={inputValues.email}
            onChange={handleChange}
            id="email"
            className="popup__input popup__input_value_place"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <span id="place-error" className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input
            value={inputValues.password}
            onChange={handleChange}
            id="password"
            className="popup__input popup__input_value_link"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <span id="link-error" className="popup__error"></span>
        </label>
      </fieldset>
    </PageWithForm>
  );
}

export default Register;
