import React from "react";
function Article({ lenguajes }) {
  return (
    <section
      style={{ display: "flex", flexWrap: "wrap", gap: "10px", width: "75%" }}
    >
      {lenguajes.map((lang) => (
        <div
          key={lang.id}
          style={{
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "10px",
            width: "30%",
            boxShadow: "2px 2px 10px #aaa",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={lang.imagen} alt={lang.nombre} width="100%" />
          <h3>{lang.nombre}</h3>
          <p>{lang.descripcion}</p>
        </div>
      ))}
    </section>
  );
}
export default Article;
