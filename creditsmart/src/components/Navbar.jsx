import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="nav">
      <div className="logo">CreditSmart</div>
      <ul>
        <li><Link className={pathname === "/" ? "active" : ""} to="/">Inicio</Link></li>
        <li><Link className={pathname === "/simulator" ? "active" : ""} to="/simulator">Simulador</Link></li>
        <li><Link className={pathname === "/apply" ? "active" : ""} to="/apply">Solicitar</Link></li>
      </ul>
    </nav>
  );
}
