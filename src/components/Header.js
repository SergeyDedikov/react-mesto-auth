import { useHistory } from "react-router-dom";
import logo from "../images/logo-mesto.svg";
import NavBar from "./NavBar";

function Header({ email, setEmail }) {
  const history = useHistory();

  function onSignOut() {
    localStorage.removeItem("token");
    history.push("/sign-in");
    setEmail('');
  }
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место.Россия" />
      <p>{email}</p>
      <nav className="nav">
        <NavBar onSignOut={onSignOut} />
      </nav>
    </header>
  );
}

export default Header;
