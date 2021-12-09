import logo from "../images/logo-mesto.svg";
import NavBar from "./NavBar";

function Header({ email, onSignOut }) {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место.Россия" />
      <p className="header__user-email">{email}</p>
      <nav className="header__nav">
        <NavBar onSignOut={onSignOut} />
      </nav>
    </header>
  );
}

export default Header;
