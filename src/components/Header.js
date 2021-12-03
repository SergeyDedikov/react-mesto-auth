import logo from "../images/logo-mesto.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место.Россия" />
    </header>
  );
}

export default Header;
