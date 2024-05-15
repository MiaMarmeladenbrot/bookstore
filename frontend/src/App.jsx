import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import Header from "./components/Header/Header.jsx";
import SignUpPopUp from "./components/SignUpButton/SignUpPopUp.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUpPopUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
