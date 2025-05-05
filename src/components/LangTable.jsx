// src/components/LangTable.js
import React from "react";

function LangTable({ lenguajes }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Lenguaje</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {lenguajes.map((lenguaje, index) => (
            <tr key={index}>
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
