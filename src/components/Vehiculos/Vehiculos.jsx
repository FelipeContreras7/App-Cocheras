import React from "react";
import "./vehiculos.css";
//Import SWAL2
import Swal from "sweetalert2";
//Import firestore
import { deleteItems } from "../../services/firestore";

function Vehiculos(props) {
  function patenteHandler() {
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
    if (props.tipoV === "AUTO") {
      if (minutos > 5) {
        pagar = hora * 200 + 200;
      } else {
        pagar = hora * 200;
      }
      sweetAlertYN(pagar);
    }
    if (props.tipoV === "CAMIONETA") {
      if (minutos > 5) {
        pagar = hora * 250 + 250;
      } else {
        pagar = hora * 250;
      }
      sweetAlertYN(pagar);
    }
    if (props.tipoV === "MOTO") {
      if (minutos > 5) {
        pagar = hora * 100 + 100;
      } else {
        pagar = hora * 100;
      }
      sweetAlertYN(pagar);
    }
  }

  function sweetAlertYN(pagar) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Está seguro?",
        text: `El monto a abonar es: $ ${pagar}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "SI, cobrar",
        cancelButtonText: "NO, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteItems(props.id);
          swalWithBootstrapButtons.fire(
            "Listo!",
            "Se ha marcado la salida del vehículo",
            "success"
          );
          // navigate("/");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Operación cancelada", "", "error");
        }
      });
  }

  return (
    <div className="filaDatosVehiculo">
      <a>{props.patente}</a>
      <p>
        Entrada: <b>{props.horae}</b>
      </p>
      <button onClick={patenteHandler}>Cobrar</button>
    </div>
  );
}

export default Vehiculos;