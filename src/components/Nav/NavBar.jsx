import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="NavBar">
      <div className="NavBar--logo">
        <h2>Mi Cochera App</h2>
      </div>
      <div className="NavBar--items">
        <Link to="/">Inicio</Link>
        <Link to="/">Cobrar</Link>
        <Link to="/">Configuración</Link>
      </div>
    </header>
  );
}

export default NavBar;
