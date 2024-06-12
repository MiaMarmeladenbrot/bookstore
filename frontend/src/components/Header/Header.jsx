import "./Header.css";
import LoginPopUp from "../LoginPopUp.jsx";
import RegisterPopUp from "../RegisterPopUp.jsx";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import LogoutButton from "../LogoutButton.jsx";
import { tokenContext, userContext } from "../../context/Context.jsx";

const Header = () => {
  const { user } = useContext(userContext);
  const { token } = useContext(tokenContext);

  // states to toggle login/register-components
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

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
        {user ? (
          <LogoutButton />
        ) : (
          <div>
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
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
