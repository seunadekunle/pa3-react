import "./Styles.css";
import { useState } from "react";
import { currUser, signInUser } from "../state";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Alert(props) {
  return (
    <div class="alert alert-danger" role="alert">
      {props.message}
    </div>
  );
}
