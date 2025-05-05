import React from "react";

const LangProgramacion = () => {
  const lenguajes = [
    {
      id: 1,
      nombre: "JavaScript",
      imagen: "",
      descripcion: "Lenguaje para desarrollo web.",
    },
    {
      id: 2,
      nombre: "Python",
      imagen: "",
      descripcion: "Versátil y fácil de aprender.",
    },
    {
      id: 3,
      nombre: "Java",
      imagen: "",
      descripcion: "Lenguaje de propósito general.",
    },
    { id: 4, nombre: "C#", imagen: "", descripcion: "Lenguaje de Microsoft." },
    {
      id: 5,
      nombre: "PHP",
      imagen: "",
      descripcion: "Lenguaje de backend muy usado.",
    },
    {
      id: 6,
      nombre: "Go",
      imagen: "",
      descripcion: "Lenguaje rápido de Google.",
    },
    {
      id: 7,
      nombre: "Ruby",
      imagen: "",
      descripcion: "Lenguaje con sintaxis elegante.",
    },
    {
      id: 8,
      nombre: "TypeScript",
      imagen: "",
      descripcion: "Superset de JavaScript.",
    },
    {
      id: 9,
      nombre: "Kotlin",
      imagen: "",
      descripcion: "Lenguaje moderno de Android.",
    },
  ];
  return (
    <>
      <div className="cards">
        {lenguajes.map((leng) => (
          <Card className="cardImagen" key={leng.id}>
            <Card.Img variant="top" src={leng.imagen} />
            <Card.Body>
              <Card.Title>{leng.nombre}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      ;
    </>
  );
};

export default LangProgramacion;
