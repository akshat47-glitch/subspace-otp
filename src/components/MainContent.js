import React from "react";

//components
import Grid from "./Grid.js";
import Form from "./Form.js";

export default function MainContent() {
  const array = [];
  for (let i = 1; i < 13; i++) {
    array.push(`./grid-images/Rectangle (${i}).png`);
  }

  const images = array.map((name) => {
    return <img src={name} alt=""></img>;
  });

  console.log(array);

  return (
    <div className="main-content">
      <div className="left">
        <h4>Create an Account</h4>
        <Form />
      </div>
      <div className="right">
        <header>
          <h4>Why choose SubSpace?</h4>
          <p>2000+ businesses trust their payments with SubSpace</p>
        </header>
        <Grid images={images} />
        <footer>
          <p className="footer">
            Need help? We are just a click away.
            <span>
              <a>Contact Us</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
