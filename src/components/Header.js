import logo from "../images/logo-mesto.svg";
import ButtonsNav from "./ButtonsNav";

function Header({ email, onSignOut }) {
  return (
    <header className="header">
      <div className="header__container header__container_mobil">
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
          <ButtonsNav onSignOut={onSignOut} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
