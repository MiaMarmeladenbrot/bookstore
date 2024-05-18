import { useContext } from "react";
import { userContext } from "../context/Context";
import { backendUrl } from "../api/api";

const LogoutButton = () => {
  const { user } = useContext(userContext);

  const logoutUser = (e) => {
    e.preventDefault();

    // # erst refreshToken implementieren

    // const res = await fetch(`${backendUrl}/api/v1/users/logout`, {headers: {"Content-Type": "application/json"}, method: "POST"})
  };

  return <button className="btn-red">Logout</button>;
};

export default LogoutButton;
