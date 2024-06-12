import { useContext } from "react";
import { userContext } from "../../context/Context";

const DashboardForCustomers = () => {
  const { user } = useContext(userContext);
  return (
    <>
      {/* allgemeine Komponenten für alle: Bestseller uä */}
      <h2>Welcome, {user?.firstname}!</h2>
    </>
  );
};

export default DashboardForCustomers;
