import React, { useState } from "react";

export default function Form() {
  const [state1, setState1] = useState("password");
  const [state2, setState2] = useState("password");

  function func(event, id) {
    event.target.classList.toggle("fa-eye-slash");
    if (id === "pass1") {
      setState1((prevState) =>
        prevState === "password" ? "text" : "password"
      );
    }
    if (id === "pass2") {
      setState2((prevState) =>
        prevState === "password" ? "text" : "password"
      );
    }
  }

  return (
    <form action="#">
      <label>
        <input type="text" placeholder="Enter Mobile"></input>
      </label>
      <label>
        <input type="text" placeholder="Enter Email"></input>
      </label>
      <label>
        <input id="pass1" type={state1} placeholder="Enter Password"></input>
        <i
          onClick={(event) => func(event, "pass1")}
          className="far fa-eye"
          id="togglePassword1"
        ></i>
      </label>
      <label>
        <input
          type={state2}
          placeholder="Confirm Password"
          id="confirm-password"
        ></input>
        <i
          onClick={(event) => func(event, "pass2")}
          className="far fa-eye"
          id="pass2"
        ></i>
      </label>

      <div className="checkbox">
        <input id="checkbox" type="checkbox" defaultChecked />
        <label htmlFor="checkbox">
          I hearby confirm that I am above 18 years old.
        </label>
      </div>
      <button type="button" className="btn btn-primary">
        Verify OTP
      </button>
      <p>
        By creating this account, you agree to our{" "}
        <a href="#">Privacy Policy</a> and <a href="#"> Terms of Use</a>
      </p>
    </form>
  );
}
