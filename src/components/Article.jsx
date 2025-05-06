import React from "react";
import "../css/Style.css";

function Article({ lenguajes }) {
  return (
    <article className="article-container">
      {lenguajes.map((lenguaje, index) => (
        <div key={index} className="card">
          <img
            src={lenguaje.imagen}
            alt={lenguaje.nombre}
            className="card-image"
          />
          <h4>{lenguaje.nombre}</h4>
        </div>
      ))}
    </article>
  );
}

export default Article;
