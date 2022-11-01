import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js" 
import Footer from './components/Footer.js';
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const toggleState = () => setToggle(!toggle);

  return (
    <div className="App">
      <Navbar toggleState = {toggleState}/>
      <Footer/>
    </div>
  );
}

export default App;
