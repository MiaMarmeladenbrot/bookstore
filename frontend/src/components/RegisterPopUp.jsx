import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Popup.css";
import { backendUrl } from "../api/api";
import { userContext } from "../context/Context";

const RegisterPopUp = ({ register, setRegister, setLogin }) => {
  const { setUser } = useContext(userContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const changePopup = () => {
    setLogin(true);
    setRegister(false);
  };

  const registerUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`${backendUrl}/api/v1/users/register`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ firstname, lastname, email, password }),
    });

    const data = await res.json();

    if (!data.result)
      return setErrorMessage(data.message || "Failed to register");

    const userData = data.result;
    setUser(userData);
    // save user to local storage for staying logged in
    localStorage.setItem("user", JSON.stringify(userData));

    setErrorMessage("");
    setRegister(false);
    navigate(`/verifyEmail/${userData._id}`);
  };

  return (
    <section>
      <Link className="btn-red" onClick={() => setRegister(true)}>
        Register
      </Link>

      {register ? (
        <article className="popup">
          <form>
            <p className="close-popup" onClick={() => setRegister(false)}>
              X
            </p>
            <input
              type="text"
              placeholder="Vorname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nachname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-red" onClick={registerUser}>
              register
            </button>
            {errorMessage ? <p>{errorMessage}</p> : ""}
            <p>
              Du hast schon einen Account?{" "}
              <Link onClick={changePopup}>Logge dich ein!</Link>
            </p>
          </form>
        </article>
      ) : null}
    </section>
  );
};

export default RegisterPopUp;
