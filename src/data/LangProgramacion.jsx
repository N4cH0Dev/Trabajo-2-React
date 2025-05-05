import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

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
    {
      id: 4,
      nombre: "C#",
      imagen: "",
      descripcion: "Lenguaje de Microsoft.",
    },
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
    <CardGroup className="cards" style={{ flexWrap: "wrap", gap: "1rem" }}>
      {lenguajes.map((leng) => (
        <Card className="cardImagen" key={leng.id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={leng.imagen || "https://via.placeholder.com/150"}
            alt={leng.nombre}
          />
          <Card.Body>
            <Card.Title>{leng.nombre}</Card.Title>
            <Card.Text>{leng.descripcion}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export default LangProgramacion;
