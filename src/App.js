import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Hotel from "./Pages/Hotel";
import Hotels from "./Pages/Hotels";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<Hotel />} />
      </Routes>
    </div>
  );
};

export default App;
