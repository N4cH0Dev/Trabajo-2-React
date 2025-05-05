import React from "react";
function Aside() {
  return (
    <aside
      style={{ width: "25%", border: "3px solid purple", padding: "10px" }}
    >
      <h2>Información</h2>
      <p>
        Esta SPA fue creada en React para mostrar lenguajes de programación.
      </p>
      <img
        src="https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif"
        width="100%"
        alt="gif"
      />
    </aside>
  );
}
export default Aside;
