import "./App.css";
import * as React from "react";
import Home from "./Home";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userName/" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
