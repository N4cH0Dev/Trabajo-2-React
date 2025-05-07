import "../css/Style.css";

function Nosotros({ LangAlumnos }) {
  return (
    <div className="nosotros-container">
      <h1>Sobre Nosotros</h1>
      {LangAlumnos.map((alumno) => (
        <div className="card-nosotros" key={alumno.id}>
          <img src={alumno.imagen} alt={`Foto de ${alumno.id}`} />
          <div className="info">
            <h2>{alumno.id}</h2>
            <p>Edad: {alumno.edad}</p>
            <p>{alumno.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Nosotros;
