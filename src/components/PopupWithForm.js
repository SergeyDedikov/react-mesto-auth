import { FormValidator, validConfig } from "../utils/formValidator";
import { useEffect, useState } from "react";

function PopupWithForm(props) {
  // -- Создаём экземпляры валидаторов форм
  const [validator, setValidator] = useState(null);

  useEffect(() => {
    const formValidator = new FormValidator(validConfig, props.name);
    formValidator.enableValidation();
    setValidator(formValidator);
  }, [props.name]);

  // -- Сброс валидации при открытии попапа
  useEffect(() => {
    if (props.isOpen && validator) {
      validator.resetValidation();
    }
  }, [props.isOpen, validator]);

  return (
    <div
      className={`
        popup popup_type_${props.name}
        ${props.isOpen ? "popup_opened" : ""}
      `}
    >
      <div className={`popup__container popup__container_type_${props.name}`}>
        <form
          onSubmit={props.onSubmit}
          name={`${props.name}`}
          className={`popup__form popup__form_${props.name}`}
          noValidate
        >
          <h3 className="popup__heading">{props.title}</h3>
          {props.children}
          <button
            className={`popup__button popup__button_${props.name} button`}
            type="submit"
          >
            {props.textButtonSubmit}
          </button>
          <button
            onClick={props.onClose}
            className="popup__close button"
            type="button"
          ></button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
