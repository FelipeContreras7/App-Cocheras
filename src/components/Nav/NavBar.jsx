import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="NavBar">
      <div className="NavBar--logo">
        <h2><Link to="/">Mi Cochera App</Link></h2>
      </div>
      <div className="NavBar--items">
        <Link to="/">Inicio</Link>
        <Link to="/cobrar">Cobrar</Link>
        <Link to="/configuracion">Configuración</Link>
      </div>
    </header>
  );
}

export default NavBar;