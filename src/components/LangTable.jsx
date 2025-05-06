import React from "react";
import "../css/Style.css";
function LangTable({ lenguajes }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tipo</th>
            <th>Lenguaje</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {lenguajes.map((lenguaje, index) => (
            <tr key={index}>
              <td>{lenguaje.id}</td>
              <td>{lenguaje.tipo}</td>
              <td>{lenguaje.nombre}</td>
              <td>{lenguaje.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LangTable;
