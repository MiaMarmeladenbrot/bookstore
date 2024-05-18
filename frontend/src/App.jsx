import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import Header from "./components/Header/Header.jsx";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import { userContext } from "./context/Context.jsx";
import { tokenContext } from "./context/Context.jsx";
import { allProductsFetch } from "./context/Context.jsx";
import { backendUrl } from "./api/api.js";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [allProducts, setAllProducts] = useState({});

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(allProducts);

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <tokenContext.Provider value={{ token, setToken }}>
          <allProductsFetch.Provider value={{ allProducts, setAllProducts }}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<LoadingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/verifyEmail/:userId" element={<VerifyEmail />} />
                <Route path="/books/:bookId" element={<DetailPage />} />
              </Routes>
            </BrowserRouter>
          </allProductsFetch.Provider>
        </tokenContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
