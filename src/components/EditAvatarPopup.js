import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    if (props.isSubmitted) {
      avatarRef.current.value = "";
    }
  }, [props.isSubmitted]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"edit-avatar"}
      title={"Обновить аватар"}
      textButtonSubmit={props.isLoading ? "Сохранение..." : "Сохранить"}
    >
      <fieldset className="popup__input-container">
        <label className="popup__field">
          <input
            ref={avatarRef}
            id="avatar"
            className="popup__input popup__input_value_link"
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="avatar-error" className="popup__error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
