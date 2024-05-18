import RenderBestsellers from "../../components/RenderBestsellers/RenderBestsellers";

const Dashboard = () => {
  return (
    <main className="dashboard">
      {/* allgemeine Komponenten für alle: Bestseller uä */}
      <RenderBestsellers />

      {/* falls eingeloggt (accessToken = true) => Komponente für Favoriten, Komponente für Bestellungen? */}
      {/* falls als Admin eingeloggt (isAdmin = true), ganz anderes Design */}
    </main>
  );
};

export default Dashboard;
