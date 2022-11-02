import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Account from "./components/Account.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="account" element={<Account />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
