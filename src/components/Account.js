import "./Styles.css";
import { useState } from "react";
import { users } from "../state";
import { useNavigate } from "react-router-dom";
import { update, currUser } from "../state";
import Alert from "./Alert";


export default function Account() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [show, setShow] = useState(false);

  //Currently unsure of the proper arrays needed to fill our needed fields 
  console.log(users);

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
      setAlertMessage("You can't leave the Username field empty");
      showAlert();
      return;
    }

    if (email.length === 0) {
      setAlertMessage("You can't leave the Email field empty");
      showAlert();
      return;
    }
    
    if (phone.length === 0) {
      setAlertMessage("You can't leave the Phone field empty");
      showAlert();
      return;
    }


    console.log(username === currUser.username)
    console.log(email === currUser.email)
    console.log(phone === currUser.phone)
    console.log(phone)
    console.log(currUser.phone)

    if((username === currUser.username) && (email === currUser.email) && (phone === currUser.telephone)){
      setAlertMessage("Nothing to update please make a change");
      showAlert();
      // console.log(username);
      // console.log(email);
      // console.log(phone); 
      // console.log(currUser.username);
      // console.log(currUser.email);
      // console.log(currUser.phone);
      return;
      

    }

    update(
      username,
      email,
      phone
    );
  }
  // This is another part I am unsure about. I looked in the Login page and if we need 
  //Values I can assign those can create forms as well.
  return (
    <body>
      <form onSubmit={(e) => onSubmit(e)}>

        <div class="form-wrapper">
          <label for="floatingUser">Username</label>
          <input
            type="username"
            class="form-control"
            id="floatingUser"
            placeholder={currUser.username}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              hideAlert();
            }}
          />
        </div>

        <div class="form-wrapper">
          <label for="floatingEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="floatingEmail"
            placeholder={currUser.email}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              hideAlert();
            }}
          />
        </div>

        <div class="form-wrapper">
          <label for="floatingPhone">Phone</label>
          <input
            type="phone number"
            class="form-control"
            id="floatingPhone"
            placeholder={currUser.telephone}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              hideAlert();
            }}
          />
        </div>

        <div class="form-wrapper">
          <button type="submit" class="btn btn-primary">Update</button>

        </div>
        <div class = "form-wrapper">
        {show && <Alert message={alertMessage} />}
        </div>
      </form>
     
    </body>
  );
}

