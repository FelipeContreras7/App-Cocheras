import React, { useState, useEffect } from "react";
import { getItems } from "../../services/firestore";
import ListaVehiculos from "../ListaVehiculos/ListaVehiculos";
import "./contenedorlistavehiculos.css";

function ContenedorListaVehiculos({ itemData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuesta) => setData(respuesta));
  }, []);

  return (
    <div className="listContainer">
      <ListaVehiculos itemData={data} />
    </div>
  );
}

export default ContenedorListaVehiculos;
