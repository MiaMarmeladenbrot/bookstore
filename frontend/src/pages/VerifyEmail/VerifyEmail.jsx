import "./VerifyEmail.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";

const VerifyEmail = () => {
  const [sixDigitCode, setSixDigitCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { userId } = useParams();
  const navigate = useNavigate();

  const verifyEmail = async (e) => {
    e.preventDefault();

    const res = await fetch(`${backendUrl}/api/v1/users/verifyEmail`, {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ userId, sixDigitCode }),
    });

    const data = await res.json();

    if (!data.result)
      return setErrorMessage(
        "Das hat leider nicht geklappt, probier's noch mal."
      );

    setErrorMessage("");
    setSuccessMessage(`Deine E-Mail ist nun verifiziert 🎉`);
  };

  return (
    <main className="verifyEmail">
      <h2>Verifiziere deine E-Mail</h2>
      <p>Wir haben dir per E-Mail einen sechsstelligen Code zugesendet.</p>
      <form>
        <input
          type="text"
          placeholder="Dein sechsstelliger Code"
          value={sixDigitCode}
          onChange={(e) => setSixDigitCode(e.target.value)}
        />
        <button className="btn-red" onClick={verifyEmail}>
          Code überprüfen
        </button>
        {successMessage ? (
          <p>
            {successMessage}
            <br />
            <button
              className="btn-transparent"
              onClick={() => navigate("/dashboard")}
            >
              Blätter weiter
            </button>
          </p>
        ) : (
          <p>{errorMessage} </p>
        )}
      </form>
    </main>
  );
};

export default VerifyEmail;
