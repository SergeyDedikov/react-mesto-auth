import { Link, useLocation } from "react-router-dom";

export default function ButtonsNav({
  onSignOut,
  changeVisibleMenu,
  isVisibleMenu,
}) {
  const pathname = useLocation().pathname;

  if (pathname === "/") {
    return (
      <>
        <button
          onClick={onSignOut}
          className="button link signout signout_place_nav"
          type="button"
        >
          Выйти
        </button>
        <button
          onClick={changeVisibleMenu}
          className={`button header__menu ${
            isVisibleMenu && "header__menu_close"
          }`}
          type="button"
        ></button>
      </>
    );
  } else if (pathname === "/sign-up") {
    return (
      <Link to="/sign-in" className="button link">
        Войти
      </Link>
    );
  } else if (pathname === "/sign-in") {
    return (
      <Link to="/sign-up" className="button link">
        Регистрация
      </Link>
    );
  } else {
    return null;
  }
}
