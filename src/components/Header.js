import logo from "../images/logo-mesto.svg";

function Header({ email }) {

  // onSignOut()
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место.Россия" />
      <p>{email}</p>
    </header>
  );
}

export default Header;
