// src/components/ProyectoCard.jsx
import logo2 from "../assets/logo2.png";

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <article className="proyecto">
      <img src={logo2} alt="Logo" />

      <div className="informacion">
        <h3>{titulo}</h3>

        <p>
          <strong>Categoría:</strong> {categoria}
        </p>

        <span
          className={`badge ${
            estado === "Finalizado" ? "done" : "process"
          }`}
        >
          {estado}
        </span>

        <div>
          <button 
            className="btn-detalle"
            onClick={() => onVerDetalle(proyecto)}>
            Ver detalle
          </button>

          <button
            className="btn-eliminar"
            onClick={() => onEliminar(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProyectoCard;