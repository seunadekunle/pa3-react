import "./Styles.css";
import { signUpUser } from "../state";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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

    console.log(username);

    if (password !== confirmPassword) {
      setAlertMessage("Passwords have to match");
      showAlert();
      return;
    }

    let result = signUpUser(
      String(username),
      String(password),
      String(email),
      String(phone)
    );

    if (result === -1) {
      setAlertMessage("User already exists with the same username");
      showAlert();
      return;
    }

    props.changeHeader(username);
    props.toggleState();
    navigate("/account");
  }

  return (
    <div class="form-wrapper-signup">
      <form class="needs-validation" onSubmit={(e) => onSubmit(e)}>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput2"
            placeholder="username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
              hideAlert();
            }}
          />
          <label for="floatingInput2">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            onChange={(e) => {
              setEmail(e.target.value);
              hideAlert();
            }}
          />
          <label for="floatingInput">Email Address</label>
        </div>
        <div class="form-floating">
          <input
            id="floatingPassword"
            type="password"
            class="form-control"
            placeholder="Password"
            name="passInput"
            required
            onChange={(e) => {
              setPassword(e.target.value);
              hideAlert();
            }}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating input-field">
          <input
            id="floatingPassword2"
            type="password"
            class="form-control"
            placeholder="Password"
            name="passInputConfirm"
            onChange={(e) => {
              setconfirmPassword(e.target.value);
              hideAlert();
            }}
          />
          <label for="floatingPassword2">Confirm Password</label>
        </div>
        <div class="form-floating input-field">
          <input
            type="tel"
            class="form-control"
            id="floatingTel"
            placeholder="Phone Number"
            required
            onChange={(e) => {
              setPhone(e.target.value);
              hideAlert();
            }}
          />
          <label for="floatingTel">Telephone</label>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </form>
      {show && <Alert message={alertMessage} />}
    </div>
  );
}
