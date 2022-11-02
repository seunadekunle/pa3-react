import "./Styles.css";
import { useState } from "react";
import { currUser } from "../state";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    currUser.username = username;
    console.log(username);

    props.toggleState();

    navigate("/login");
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
      <footer class="text-center text-lg-start bg-light text-muted">
        <div class="text-center p-4">
          © 2022 Copyright: Seun Adekunle | Jalen Marshall
        </div>
      </footer>
    </div>
  );
}
