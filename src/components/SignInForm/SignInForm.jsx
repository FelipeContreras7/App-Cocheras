import React from "react";
import "./signinform.css";

import { createNewHourVehicle } from "../../services/firestore";

function SignInForm() {
  return (
    <form className="formularioCarga" action="">
      <input type="text" name="patente" placeholder="PATENTE" required />
      <select name="vehiculo" id="vehículo" required>
        <option value="volvo">AUTO</option>
        <option value="saab">CAMIONETA</option>
        <option value="mercedes">MOTO</option>
      </select>
      <button className="btnConfirmar" type="submit">
        Cargar vehículo
      </button>
    </form>
  );
}

export default SignInForm;
