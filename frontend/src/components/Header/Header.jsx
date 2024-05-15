import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import LoginPopUp from "../LoginButton/LoginPopUp";
import SignUpPopUp from "../SignUpButton/SignUpPopUp";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

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
        <LoginPopUp login={login} setLogin={setLogin} setSignUp={setSignUp} />
        <SignUpPopUp
          signUp={signUp}
          setSignUp={setSignUp}
          setLogin={setLogin}
        />
      </nav>
    </header>
  );
};

export default Header;
