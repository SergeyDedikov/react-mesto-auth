import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  // -- Общий стэйт для полей ввода
  const [inputValues, setInputValues] = useState({ place: "", link: "" });

  function handleChange(e) {
    setInputValues((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: inputValues.place,
      link: inputValues.link,
    });
  }

  useEffect(() => {
    // Очищаем поля ввода после отправки
    if (props.isSubmitted) {
      inputValues.place = "";
      inputValues.link = "";
    }
  }, [props.isSubmitted, inputValues]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"add-place"}
      title={"Новое место"}
      textButtonSubmit={props.isLoading ? "Сохранение..." : "Создать"}
    >
      <fieldset className="popup__input-container">
        <label className="popup__field">
          <input
            value={inputValues.place}
            onChange={handleChange}
            id="place"
            className="popup__input popup__input_value_place"
            type="text"
            name="place"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span id="place-error" className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input
            value={inputValues.link}
            onChange={handleChange}
            id="link"
            className="popup__input popup__input_value_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-error" className="popup__error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
