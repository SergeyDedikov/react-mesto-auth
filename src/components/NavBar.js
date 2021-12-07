import { Link, useLocation } from "react-router-dom";

function NavBar({ onSignOut }) {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <button onClick={onSignOut} className="button nav__button" type="button">
        Выйти
      </button>
    );
  } else if (location.pathname === "/sign-up") {
    return (
      <Link to="/sign-in" className="button nav__button">
        Войти
      </Link>
    );
  } else if (location.pathname === "/sign-in") {
    return (
      <Link to="/sign-up" className="button nav__button">
        Регистрация
      </Link>
    );
  } else {
    return null;
  }
}

export default NavBar;
