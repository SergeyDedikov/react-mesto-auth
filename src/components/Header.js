import { useEffect, useState } from "react";
import logo from "../images/logo-mesto.svg";
import ButtonsNav from "./ButtonsNav";

export default function Header({ loggedIn, email, onSignOut }) {
  // -- Управляем отображением верхней части хидера
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const containerMobilVisible = `header__container header__container_mobil ${
    loggedIn && isVisibleMenu && "header__container_mobil_visible"
  }`;

  useEffect(() => {
    if (!loggedIn) {
      // если выйдем из системы с раскрытым меню, то закроем его
      setIsVisibleMenu(false);
    }
  }, [loggedIn]);

  function changeVisibleMenu() {
    setIsVisibleMenu(!isVisibleMenu);
  }

  return (
    <header className="header">
      <div className={containerMobilVisible}>
        <p className="header__user-email header__user-email_mobil">{email}</p>
        <button
          onClick={onSignOut}
          className="button link signout signout_place_header"
          type="button"
        >
          Выйти
        </button>
      </div>
      <div className="header__container header__container_main">
        <img className="header__logo" src={logo} alt="Логотип Место.Россия" />
        <p className="header__user-email">{email}</p>
        <nav className="header__nav">
          <ButtonsNav
            onSignOut={onSignOut}
            changeVisibleMenu={changeVisibleMenu}
            isVisibleMenu={isVisibleMenu}
          />
        </nav>
      </div>
    </header>
  );
}
