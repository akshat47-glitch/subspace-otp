import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img src="./logo.png"></img>
      <div className="login">
        <p>Already a user?</p>
        <button type="btn" className="btn btn-primary">
          Log in
        </button>
      </div>
    </nav>
  );
}
