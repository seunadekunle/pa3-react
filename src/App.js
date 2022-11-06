import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Account from "./components/Account.js";

function App() {
  const [toggle, setToggle] = useState(false);
  const [headerText, setHeaderText] = useState("");

  const changeHeader = (val) => setHeaderText(val);
  const toggleState = () => setToggle(!toggle);

  return (
    <div className="App">
      <Navbar toggle={toggle} name={headerText} />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Login toggleState={toggleState} changeHeader={changeHeader} />}
          />
          <Route path="login" element={<Login toggleState={toggleState} changeHeader={changeHeader} />} />
          <Route
            path="account"
            element={<Account  toggleState={toggleState} changeHeader={changeHeader} />}
          />
          <Route
            path="signup"
            element={<SignUp toggleState={toggleState} changeHeader={changeHeader} />}
          />
        </Routes>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
