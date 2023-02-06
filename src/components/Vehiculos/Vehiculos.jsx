import React from "react";
import "./vehiculos.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Vehiculos(props) {
  const navigate = useNavigate();

  function patenteHandler() {
    //Obtenemos el tipo de vehículo
    let tipoVehiculo = props.tipo;

    //Obtenemos los datos de hora de entrada
    let horaEntrada = props.horae;
    let horasTotal = horaEntrada.split(":");
    let horaDeEntrada = +horasTotal[0];
    let minutosDeEntrada = +horasTotal[1];

    //Obtenemos los datos de hora de salida
    let horaSalida = new Date();
    let horaDeSalida = horaSalida.getHours();
    let minutosDeSalida = horaSalida.getMinutes();

    let horaDeEstadia = horaDeSalida - horaDeEntrada;
    let minutosDeEstadia;

    if (minutosDeSalida < minutosDeEntrada) {
      minutosDeSalida = minutosDeSalida + 60;
      minutosDeEstadia = minutosDeSalida - minutosDeEntrada;
      horaDeEstadia = horaDeEstadia - 1;
    } else {
      minutosDeEstadia = minutosDeSalida - minutosDeEntrada;
    }

    calcularPrecio(horaDeEstadia, minutosDeEstadia);
  }

  function calcularPrecio(hora, minutos) {
    let pagar;
    if (props.tipoV == "AUTO") {
      if (minutos > 5) {
        pagar = hora * 200 + 200;
      } else {
        pagar = hora * 200;
      }
      alert("El monto a pagar es: $" + pagar);
    }
    if (props.tipoV == "CAMIONETA") {
      if (minutos > 5) {
        pagar = hora * 250 + 250;
      } else {
        pagar = hora * 250;
      }
      alert("El monto a pagar es: $" + pagar);
    }
    if (props.tipoV == "MOTO") {
      if (minutos > 5) {
        pagar = hora * 100 + 100;
      } else {
        pagar = hora * 100;
      }
      alert("El monto a pagar es: $" + pagar);
    }
  }

  return (
    <div className="filaDatosVehiculo">
      <button onClick={patenteHandler}>{props.patente}</button>
      <p>
        Hora entrada: <b>{props.horae}</b>
      </p>
    </div>
  );
}

export default Vehiculos;
