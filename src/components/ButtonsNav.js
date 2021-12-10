import { Link, useLocation } from "react-router-dom";

function ButtonsNav({ onSignOut }) {
  const pathname = useLocation().pathname;

  if (pathname === "/") {
    return (
      <button
        onClick={onSignOut}
        className="button link signout signout_place_nav"
        type="button"
      >
        Выйти
      </button>
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

export default ButtonsNav;
