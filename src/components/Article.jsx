// src/components/Article.js
import React from "react";

function Article({ lenguajes }) {
  return (
    <article style={{ width: "70%" }}>
      {lenguajes.map((lenguaje, index) => (
        <div key={index} className="card">
          {lenguaje.imagen}
          <h4>{lenguaje.nombre}</h4>
          <p>{lenguaje.descripcion}</p>
        </div>
      ))}
    </article>
  );
}

export default Article;
