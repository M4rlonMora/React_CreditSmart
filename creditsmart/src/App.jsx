import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Simulator from "./pages/Simulator.jsx";
import Apply from "./pages/Apply.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
