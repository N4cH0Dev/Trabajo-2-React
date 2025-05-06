import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundImage:
          "url('https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/conoce-5-lenguajes-de-programacion-basicos.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "blue" }}>FRT UTN 2024</h2>
      <p style={{ color: "red" }}>
        La Facultad Regional Tucumán es una unidad académica dependiente de la
        Universidad Tecnológica Nacional establecida en 1954...
      </p>
    </footer>
  );
}

export default Footer;
