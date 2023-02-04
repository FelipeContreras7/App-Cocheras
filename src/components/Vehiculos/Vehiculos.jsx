import React from "react";
import "./vehiculos.css";

function Vehiculos(props) {
  return (
    <div className="filaDatosVehiculo">
      <a href="">{props.patente}</a>
      <p>
        Hora entrada: <b>{props.horae}</b>
      </p>
    </div>
  );
}

export default Vehiculos;
