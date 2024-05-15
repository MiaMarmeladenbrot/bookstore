import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPopUp = ({ signUp, setSignUp, setLogin }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePopup = () => {
    setLogin(true);
    setSignUp(false);
  };

  return (
    <section>
      <Link className="btn-transparent" onClick={() => setSignUp(true)}>
        Sign Up
      </Link>

      {signUp ? (
        <article className="popup">
          <form>
            <p className="close-popup" onClick={() => setSignUp(false)}>
              X
            </p>
            <input
              type="text"
              placeholder="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
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
            <button className="btn-red">sign up</button>
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

export default SignUpPopUp;
