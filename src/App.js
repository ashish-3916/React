import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#07233f";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar name="TextAnalyser" mode={mode} toggle={handleToggle} />
      <div className="container my-3">
        <TextForm heading="Enter the text below" mode={mode} />
      </div>
      {/* <div className="container my-3">
        <About />
      </div> */}
    </>
  );
}

export default App;
