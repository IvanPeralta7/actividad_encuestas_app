import React from "react";
import "./components.css"

function Encuestas({ encuestas }) {
  return (
      <div>
        <h2>Encuestas Disponibles</h2>     
         {encuestas.map((encuesta) => (
            <ul key={encuesta.id}>
                <li>{encuesta.pregunta}</li>
                    {encuesta.opciones.map((opcion) => (
                    <div>
                        <input key={opcion} name="opciones" type="radio"/>
                            <label>{opcion}</label>
                    </div>
                    ))}
            </ul>
        ))}
      </div>
  );
}

export default Encuestas;