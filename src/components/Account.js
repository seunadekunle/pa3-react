import "./Styles.css";
import { currUser } from "../state.js";
import { users } from "../state";


function Account() {
  console.log(currUser);
  console.log(users);
  return (
    <div className="Account">
    </div>
  );
}

export default Account;
