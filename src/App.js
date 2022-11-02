import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";


import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Account from "./components/Account.js";

function App() {
  const [toggle, setToggle] = useState(true);
  const toggleState = () => setToggle(!toggle);

  return (
    <div className="App">
      <Navbar toggleState={toggleState} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
