import "./Styles.css";
import { useState } from "react";
import { currUser } from "../state";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login(props) {
  return (
  
  <body>
    <div class = "form-wrapper">
        <form>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          
    </div>
    

    

  
  </body>

  );
}


export default Login;
