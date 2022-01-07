import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleBelugaClick = () => {
    let newText = "";
    let flag = 1;
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = "";
      for (let j = 0; j < words[i].length; j++) {
        let x;
        if (flag) x = words[i][j].toUpperCase();
        else x = words[i][j].toLowerCase();
        flag ^= 1;
        word += x;
      }
      newText += word + " ";
    }
    setText(newText);
  };
  const handleCopyClick = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleResetClick = (event) => {
    setText("");
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="10"
            placeholder="Enter the text"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleBelugaClick}>
          BeLuGa
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          style={{ float: "right" }}
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>Reading Time : {0.01 * text.split(" ").length} min</p>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
