import React from "react";
import logo from "./logo.png";
import "./App.css";
import Home from "./pages/Home/HomeScreen";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />;
      </div>
      <Home />
    </div>
  );
}

export default App;
