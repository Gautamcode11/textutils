import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  let words = text.split(" ").length;

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  // setText("Set text");
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>

        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary  " onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>

        <p>{0.008 * words} minutes to read the above by average human </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
