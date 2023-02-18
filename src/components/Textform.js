import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpcase = () => {
    // console.log("button clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase" , "success")
  };
  const handleLowcase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase" , "success")
  }; 
  const handleDeleteSpace = () => {
    let newText = text.replace(/ /g, "");
    setText(newText);
    props.showAlert("Spaces are deleted" , "success")
  };

  const handleonChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h3 style={{color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black"))}}>{props.heading}</h3>
      <div className="mb-3 "></div>
      <div className="mb-3">
        <textarea
          className="form-control"
          style={{
            backgroundColor:  (props.mode === "red" ? "#d50b0b" :  (props.mode === "blue" ? "#1223ce" : (props.mode === "dark" ? "#1f2753" : "white")) ), 

            color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black")),

          }}
          value={text}
          onChange={handleonChange}
          id="exampleFormControlTextarea1"
          rows={10}
         
        />
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpcase}>
        Convert To Uppercase
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={handleLowcase}
        onChange={handleonChange}
      >
        Convert To Lowercase
      </button>
      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handleDeleteSpace}
        onChange={handleonChange}
      >
        Delete Spaces
      </button>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>{text.length > 0 ? text : "Enter your text"}</p>
      </div>
    </div>
  );
}
