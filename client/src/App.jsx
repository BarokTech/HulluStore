// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
// import axios from "axios";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import UserInfo from "./components/UserInfo";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import { createContext, useState } from "react";
import Cart from "./components/Cart";

export const UserContext = createContext({});
export const CartContext = createContext([]);
function App() {
  // const [imgUrl, setImgUrl] = useState("");
  // axios
  //   .get("https://fakestoreapi.com/products/1")
  //   .then((res) => {
  //     console.log(res.data);
  //     setImgUrl(res.data.image);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    address: {},
  });
  const [cartContent, setCartContent] = useState([
    {
      id: 2,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      title: "some title",
      price: "some price",
    },
  ]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <CartContext.Provider value={{ cartContent, setCartContent }}>
        {
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="flex-grow-1">
              <div>
                <Routes>
                  <Route path="/" exact element={<HomePage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/user-info" element={<UserInfo />} />
                  <Route path="/product-page" element={<ProductDetails />} />
                  <Route path="/register" element={<Signup />} />
                  <Route
                    path="/product-detail/:id"
                    element={<ProductDetails />}
                  />
                  <Route path="*" element={<Notfound />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        }
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
