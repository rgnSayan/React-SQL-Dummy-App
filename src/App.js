import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Customer/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
