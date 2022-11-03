import "./Styles.css";
import { useState } from "react";
import { signInUser } from "../state";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  function showAlert() {
    setShow(true);
  }
  function hideAlert() {
    setShow(false);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0) {
      setAlertMessage("You can't leave the email field empty");
      showAlert();
      return;
    }
    if (password.length === 0) {
      setAlertMessage("You can't leave the password field empty");
      showAlert();
      return;
    }

    let signInVal = signInUser(String(username), String(password));

    if (signInVal === 1) {
      navigate("/account");
    } else {
      setAlertMessage("User not found");
      showAlert();
      return;
    }
  }

  return (
      <div class="form-wrapper">
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-floating mb-3">
            <input
              type="username"
              class="form-control"
              placeholder="Username"
              id="floatingInput"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                hideAlert();
              }}
            />
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                hideAlert();
              }}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        {show && <Alert message={alertMessage} />}
      </div>
  );
}
