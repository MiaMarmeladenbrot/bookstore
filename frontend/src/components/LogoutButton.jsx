import { useContext } from "react";
import { tokenContext, userContext } from "../context/Context";
import { backendUrl } from "../api/api";

const LogoutButton = () => {
  const { setToken } = useContext(tokenContext);

  const logoutUser = async (e) => {
    e.preventDefault();

    // # refreshToken noch im Backend implementieren

    // const res = await fetch(`${backendUrl}/api/v1/users/logout`, {headers: {"Content-Type": "application/json"}, method: "POST"})

    const res = await fetch(`${backendUrl}/api/v1/users/logout`, {
      method: "POST",
      credentials: "include", // damit das Setzen des Refresh-Tokens auf null (im Backend) übernommen wird
    });

    const data = await res.json();

    if (!data.result) return alert("Could not logout");

    navigate("/dashboard");

    setToken("");
    setUser("");
  };

  return (
    <button className="btn-red" onClick={logoutUser}>
      Logout
    </button>
  );
};

export default LogoutButton;
