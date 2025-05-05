import React from "react";
function LangTable({ lenguajes }) {
  return (
    <table
      style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {lenguajes.map((lang) => (
          <tr
            key={lang.id}
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ddd")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            <td>{lang.nombre}</td>
            <td>{lang.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default LangTable;
