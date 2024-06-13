import "./Dashboard.css";
import { useContext } from "react";
import DashboardForCustomers from "../../components/DashboardForCustomers.jsx/DashboardForCustomers";
import { userContext } from "../../context/Context";
import DashboardForAll from "../../components/DashboardForAll/DashboardForAll";
import DashboardForAdmins from "../../components/DashboardForAdmins/DashboardForAdmins";

const Dashboard = () => {
  const { user } = useContext(userContext);
  return (
    <main className="dashboard">
      {/* Dashboard Overview for all unlogged visitors */}
      {!user && <DashboardForAll />}

      {user && user.isAdmin ? (
        //  Dashboard Overview for all admins
        <DashboardForAdmins />
      ) : (
        //  Dashboard Overview for all logged in customers
        <DashboardForCustomers />
      )}
    </main>
  );
};

export default Dashboard;
