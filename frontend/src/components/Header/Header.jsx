import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import LoginButton from "../LoginButton/LoginButton";
import SignUpButton from "../SignUpButton/SignUpButton";

const Header = () => {
  return (
    <header>
      <Link to="/home">
        <h1>
          Booksta<span>.</span>
        </h1>
      </Link>
      <nav>
        <NavLink to="/home">Dashboard</NavLink>
        <NavLink to="/cart">Warenkorb</NavLink>
        <NavLink to="/favorites">Favoriten</NavLink>
        <LoginButton />
        <SignUpButton />
      </nav>
    </header>
  );
};

export default Header;
