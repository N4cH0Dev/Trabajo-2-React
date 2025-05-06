import React from "react";

const Aside = () => {
  return (
    <aside
      style={{
        width: "25%",
        padding: "20px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "2px solid white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Programación 2</h2>
      <p style={{ fontWeight: "bold", color: "#ffd700" }}>
        Los lenguajes de programación son herramientas que permiten a los
        desarrolladores escribir instrucciones que una computadora puede
        entender y ejecutar. Estos lenguajes están diseñados para crear
        programas de software que pueden realizar una amplia variedad de tareas,
        desde cálculos simples hasta operaciones complejas y manejo de datos.
      </p>
      <ol>
        <li>
          <strong>Lenguajes de bajo nivel:</strong> Están más cerca del lenguaje
          máquina y permiten un control más directo sobre el hardware. Ejemplos
          incluyen el ensamblador y el lenguaje de máquina. Estos lenguajes son
          muy eficientes, pero también más difíciles de aprender y usar.
        </li>
        <li>
          <strong>Lenguajes de alto nivel:</strong> Diseñados para ser más
          fáciles de leer y escribir para los humanos. Ejemplos: Python, Java,
          C#. Son más abstractos y pueden ser menos eficientes en rendimiento.
        </li>
        <li>
          <strong>Lenguajes compilados:</strong> Requieren compilación antes de
          ejecutarse. Ejemplos: C y C++. Mejoran el rendimiento pero pueden ser
          más complejos.
        </li>
        <li>
          <strong>Lenguajes interpretados:</strong> No requieren compilación
          previa. Ejemplos: Python, JavaScript. Más flexibles pero pueden ser
          más lentos.
        </li>
      </ol>
    </aside>
  );
};

export default Aside;
