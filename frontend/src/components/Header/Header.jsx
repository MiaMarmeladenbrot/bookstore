import "./Header.css";
import LoginPopUp from "../LoginPopUp/LoginPopUp";
import RegisterPopUp from "../RegisterPopUp/RegisterPopUp";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // states to toggle login/register-components
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

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
        <LoginPopUp
          login={login}
          setLogin={setLogin}
          setRegister={setRegister}
        />
        <RegisterPopUp
          register={register}
          setRegister={setRegister}
          setLogin={setLogin}
        />
      </nav>
    </header>
  );
};

export default Header;
