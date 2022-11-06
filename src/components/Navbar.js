import "./Styles.css";
import { Outlet, Link } from "react-router-dom";
import { currUser } from "../state";
import { users } from "../state"

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg">
        <Link class="navbar-brand" to={`login`}>
          Project
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/login">
              Login
            </Link>
            <Link class="nav-item nav-link" to="/signup">
              New
            </Link>
            <Link class="nav-item nav-link" to="/account">
              User
            </Link>
          </div>
        </div>
        <div classname = "floating-wrapper">
          {props.toggle && <label> Current User: { props.name }</label>}
        </div>
      </nav>
    </div>
    
  );
}