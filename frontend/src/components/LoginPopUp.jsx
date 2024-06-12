import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Popup.css";
import { backendUrl } from "../api/api";
import { userContext } from "../context/Context";

const LoginPopUp = ({ login, setLogin, setRegister }) => {
  const { setUser } = useContext(userContext);

  const [email, setEmail] = useState("mia.mecklenburg@gmx.net");
  const [password, setPassword] = useState("mia");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const changePopup = () => {
    setLogin(false);
    setRegister(true);
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`${backendUrl}/api/v1/users/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!data.user)
      return setErrorMessage(
        "Leider hat der Login nicht geklappt, versuch's noch mal."
      );

    navigate("/dashboard");

    setUser(data.user);
    // save user to local storage for staying logged in
    localStorage.setItem("user", JSON.stringify(data.user));

    setLogin(false);
  };

  return (
    <section>
      <Link className="btn-transparent" onClick={() => setLogin(true)}>
        Login
      </Link>

      {login ? (
        <article className="popup">
          <form>
            <p className="close-popup" onClick={() => setLogin(false)}>
              X
            </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-red" onClick={loginUser}>
              login
            </button>
            {errorMessage ? <p>{errorMessage} </p> : ""}
            <p>
              Du hast noch keinen Account?{" "}
              <Link onClick={changePopup}>Registrier dich jetzt!</Link>
            </p>
          </form>
        </article>
      ) : (
        ""
      )}
    </section>
  );
};

export default LoginPopUp;
