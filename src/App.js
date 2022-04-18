import "./App.css";
import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#07233f";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <HashRouter>
        <Navbar name="TextAnalyser" mode={mode} toggle={handleToggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text" mode={mode} alert={showAlert} />} />
            <Route path="/home" element={<TextForm heading="Enter the text" mode={mode} alert={showAlert} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
