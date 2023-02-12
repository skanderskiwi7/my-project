import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/SignUp";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import AddCar from "./pages/addCar/AddCar";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles.css";
function App() {
  const [showNav, setShowNav] = useState(true);
  const whitelistShow = ["/", "/contact", "/profile", "/addCar"];
  const location = useLocation();

  useEffect(() => {
    console.log("cccccccccc", whitelistShow.includes(location), location);
    if (whitelistShow.includes(location.pathname)) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location.pathname]);

  return (
    <div>
      {showNav && <NavBar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
