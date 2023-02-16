import React, { useState, useEffect } from "react";
import { getItems, getItemsByDomain } from "../../services/firestore";
import Filtro from "../Filtro/filtro";
import ListaVehiculos from "../ListaVehiculos/ListaVehiculos";
import { Orbit } from "@uiball/loaders";
import "./contenedorlistavehiculos.css";

function ContenedorListaVehiculos() {
  const [data, setData] = useState([]);
  const [busqueda2, setBusqueda2] = useState();
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (busqueda2 == null || busqueda2 == "") {
      getItems()
        .then((respuesta) => setData(respuesta))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByDomain(busqueda2)
        .then((respuesta) => setData(respuesta))
        .finally(() => setIsLoading(false));
    }
  }, [busqueda2, data]);

  function filtrado(busqueda) {
    setBusqueda2(busqueda);
  }

  return (
    <div className="listContainer">
      <Filtro onBusqueda={filtrado} />
      {isLoading && <Orbit size={25} speed={1.5} color="black" />}
      <div className="table">
        <ListaVehiculos itemData={data} />
      </div>
    </div>
  );
}

export default ContenedorListaVehiculos;