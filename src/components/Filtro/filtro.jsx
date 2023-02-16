import React, { useState, useEffect } from "react";
import "./filtro.css";

function Filtro({ onBusqueda }) {
  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    onBusqueda(busqueda);
  }, [busqueda]);

  function handlerFiltro(e) {
    let upperCase = e.target.value.toUpperCase();
    setBusqueda(upperCase);
  }

  return (
    <div className="filterContainer">
      <p>Patente:</p>
      <input
        type="text"
        placeholder="Introduzca la patente"
        onChange={handlerFiltro}
      />
    </div>
  );
}

export default Filtro;