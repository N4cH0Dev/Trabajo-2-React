// src/pages/Nosotros.jsx
import React from "react";
import "../css/Style.css";

function Nosotros({ alumnos }) {
  return (
    <div className="nosotros">
      <h2>Conocé a nuestros alumnos</h2>
      <div className="alumnos-container">
        {alumnos.map((alumno) => (
          <div className="alumno-card" key={alumno.id}>
            <h3>{alumno.nombre}</h3>
            <p>
              <strong>Edad:</strong> {alumno.edad} años
            </p>
            {alumno.imagen && (
              <img
                src={alumno.imagen}
                alt={alumno.nombre}
                className="foto-alumno"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nosotros;
