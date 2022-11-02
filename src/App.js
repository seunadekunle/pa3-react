import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js" 
import Footer from './components/Footer.js';
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(true);
  const toggleState = () => setToggle(!toggle);

  return (
    <div className="App">
      <Navbar toggleState = {toggleState}/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
