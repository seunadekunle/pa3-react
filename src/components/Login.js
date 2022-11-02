import "./Styles.css";
import { useState } from "react";
import { currUser } from "../state";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Login(props) {
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  localStorage.setItem("key", "value")

  function onSubmit(e) {
    e.preventDefault();

    currUser.username = username;
    console.log(username);

    props.toggleState();

    navigate("/account");
  }

  return (
    <div className="Login">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
}

