import React from "react";

function Footer() {
  return (
    <footer>
      <h3>FRT UTN</h3>
      <div id="map">
        {/* Insertar mapa */}
        <iframe
          src="https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/conoce-5-lenguajes-de-programacion-basicos.jpg"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
