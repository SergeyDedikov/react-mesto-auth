import { Link, useLocation } from "react-router-dom";

function NavBar({ onSignOut }) {
  const pathname = useLocation().pathname;

  if (pathname === "/") {
    return (
      <button onClick={onSignOut} className="button nav__button" type="button">
        Выйти
      </button>
    );
  } else if (pathname === "/sign-up") {
    return (
      <Link to="/sign-in" className="button nav__button">
        Войти
      </Link>
    );
  } else if (pathname === "/sign-in") {
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
