import { useContext } from "react";
import { userContext } from "../context/Context";
import { backendUrl } from "../api/api";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { setUser } = useContext(userContext);

  const navigate = useNavigate();

  const logoutUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`${backendUrl}/api/v1/users/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    if (!data.result) return alert("Could not logout");

    // remove user from local storage to log out
    localStorage.removeItem("user");
    setUser("");

    navigate("/dashboard");
  };

  return (
    <button className="btn-red" onClick={logoutUser}>
      Logout
    </button>
  );
};

export default LogoutButton;
