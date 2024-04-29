import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;
const Join = () => {
  const [name, setName] = useState("");

  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value = "";
  };

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="" />
        <h1>C CHAT</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="joinInput"
          placeholder="Enter your name..."
        />
        <Link to="/chat" onClick={(e) => (!name ? e.preventDefault() : null)}>
          <button onClick={sendUser} className="joinBtn">
            Login{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
