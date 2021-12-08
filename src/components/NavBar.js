import { Link, useLocation } from "react-router-dom";

function NavBar({ onSignOut }) {
  const pathname = useLocation().pathname;

  if (pathname === "/") {
    return (
      <button
        onClick={onSignOut}
        className="button button_link button_link_signout"
        type="button"
      >
        Выйти
      </button>
    );
  } else if (pathname === "/sign-up") {
    return (
      <Link to="/sign-in" className="button button_link">
        Войти
      </Link>
    );
  } else if (pathname === "/sign-in") {
    return (
      <Link to="/sign-up" className="button button_link">
        Регистрация
      </Link>
    );
  } else {
    return null;
  }
}

export default NavBar;
