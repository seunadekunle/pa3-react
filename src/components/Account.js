import "./Styles.css";
import { useState } from "react";
import { users} from "../state";
import { useNavigate } from "react-router-dom";
import { update } from "../state";
import Alert from "./Alert";


export default function Account() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
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
// This is another part I am unsure about. I looked in the Login page and if we need 
//Values I can assign those can create forms as well.
  return (
    <body>
        <form>
          
                <div class="form-wrapper">
                    <label for="floatingUser">Username</label>
                    <input
                      type="Username"
                      class="form-control"
                      id="floatingUser"
                      placeholder="Username: RockStar28"
                    />
                  </div>

                <div class="form-wrapper">
                    <label for="floatingEmail">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="floatingEmail"
                      placeholder="Email: SupremeDreams@uky.edu"
                    />
                  </div>

                  <div class="form-wrapper">
                    <label for="floatingPhone">Phone</label>
                    <input
                      type="phone number"
                      class="form-control"
                      id="floatingPhone"
                      placeholder="Phone Number: 1974901704"
                    />
                  </div>
                  <button type="submit" class="form-wrapper">Update</button>
        </form>
    </body>
  );
}

