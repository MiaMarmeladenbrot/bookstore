import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import Header from "./components/Header/Header.jsx";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { useState } from "react";

import { userContext } from "./context/Context.jsx";
import { tokenContext } from "./context/Context.jsx";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <tokenContext.Provider value={{ token, setToken }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<LoadingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/verifyEmail/:userId" element={<VerifyEmail />} />
            </Routes>
          </BrowserRouter>
        </tokenContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
