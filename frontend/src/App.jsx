import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import Header from "./components/Header/Header.jsx";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verifyEmail/:userId" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
