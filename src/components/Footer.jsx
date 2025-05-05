// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer>
      <h3>FRT UTN</h3>
      <div id="map">
        {/* Insertar un iframe con el mapa */}
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
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
