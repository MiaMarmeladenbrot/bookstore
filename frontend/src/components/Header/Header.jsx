import "./Header.css";
import LoginPopUp from "../LoginPopUp.jsx";
import RegisterPopUp from "../RegisterPopUp.jsx";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // states to toggle login/register-components
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  // # falls es eine userId gibt, Logout anzeigen und login/register verstecken?

  return (
    <header>
      <Link to="/">
        <h1>
          The Bookstore <span>.</span>
        </h1>
      </Link>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
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
