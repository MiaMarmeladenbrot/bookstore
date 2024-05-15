import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPopUp = ({ login, setLogin, setSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePopup = () => {
    setLogin(false);
    setSignUp(true);
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
            <button className="btn-red">login</button>
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
