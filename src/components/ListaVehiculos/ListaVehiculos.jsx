import React from "react";
import Vehiculos from "../Vehiculos/Vehiculos";

function ListaVehiculos({ itemData }) {
  return itemData.map((item) => (
    <Vehiculos
      key={item.patente}
      id={item.patente}
      patente={item.patente}
      horae={item.fechaentrada}
      tipoV={item.tipo}
    />
  ));
}

export default ListaVehiculos;
