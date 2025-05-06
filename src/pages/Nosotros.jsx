import "../css/Style.css";
import nacho from "../images/nacho.jpeg";
import nico from "../images/nico.jpeg";
function Nosotros() {
  const datos = [
    {
      id: 1,
      nombre: "Jose Ignacio Diaz Romero",
      descripcion:
        "Soy estudiante de la tecnicatura en programacion, con experiencia previa en el desarrollo de sistemas web utilizando tecnologías como MySQL y GeneXus. Me destaco por mi enfoque en la arquitectura lógica de los proyectos, la documentación clara y la integración entre frontend y backend. En este trabajo me encargué del armado de la estructura del proyecto, diseño de componentes reutilizables y conexión con estilos globales.",
      imagen: nacho,
    },
    {
      id: 2,
      nombre: "Nicolas Fernandez",
      descripcion:
        "Soy estudiante de programación y me estoy formando en desarrollo frontend. Me apasiona crear interfaces limpias y funcionales. Estoy aprendiendo React y tengo conocimientos de HTML, CSS y JavaScript. En este proyecto trabajé principalmente en el diseño visual y la adaptación responsiva, asegurándome de que la aplicación sea clara y fácil de usar en diferentes dispositivos.",
      imagen: nico,
    },
  ];

  return (
    <div className="nosotros-container">
      <h1>Sobre Nosotros</h1>
      {datos.map((persona) => (
        <div className="card-nosotros" key={persona.id}>
          <img src={persona.imagen} alt={`Foto de ${persona.nombre}`} />
          <div className="info">
            <h2>{persona.nombre}</h2>
            <p>{persona.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Nosotros;
