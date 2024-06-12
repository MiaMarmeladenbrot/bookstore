import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import Header from "./components/Header/Header.jsx";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import { userContext } from "./context/Context.jsx";
import { allProductsFetch } from "./context/Context.jsx";
import { backendUrl } from "./api/api.js";
import CartPage from "./pages/CartPage/CartPage.jsx";
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage.jsx";

function App() {
  const [user, setUser] = useState();
  const [allProducts, setAllProducts] = useState({});

  // fetch all products
  useEffect(() => {
    fetch(`${backendUrl}/api/v1/products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // check local storage for saved user and save them into user-state
  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("user"));

    if (userLocalStorage) {
      setUser(userLocalStorage);
    }
  }, []);

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <allProductsFetch.Provider value={{ allProducts, setAllProducts }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<LoadingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/verifyEmail/:userId" element={<VerifyEmail />} />
              <Route path="/books/:bookId" element={<DetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/bookmarks" element={<BookmarksPage />} />
            </Routes>
          </BrowserRouter>
        </allProductsFetch.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
