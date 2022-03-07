import logo from "../assets/logo.svg";

export function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="AirBnB logo" className="nav__logo" />
    </nav>
  );
}
