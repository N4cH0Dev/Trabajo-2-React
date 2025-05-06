import React from "react";
import { Link } from "react-router-dom";
import "../css/Style.css";
function Header() {
  return (
    <>
      <header>
        <h1>Trabajo Practico N2</h1>
        <h2>Comisión: 2 - Grupo: 13</h2>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="https://frt.utn.edu.ar/" target="_blank">
            FRT UTN
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
