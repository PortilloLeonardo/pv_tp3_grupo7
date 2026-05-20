import React from 'react';

const ProyectoCard = ({ proyecto, onEliminar }) => {
  return (
    <div className="proyecto">
      <img 
        src="https://via.placeholder.com/200" 
        alt={proyecto.titulo} 
      />
      
      <div className="informacion">
        <h3>{proyecto.titulo}</h3>
        <p><strong>Categoría:</strong> {proyecto.categoria}</p>
        <p><strong>Estado:</strong> {proyecto.estado}</p>
        
        <div className="acciones">
          <button 
            className="btn-ver-detalle"
            onClick={() => alert(`Ver detalle de: ${proyecto.titulo}`)}
          >
            Ver Detalle
          </button>
          
          <button 
            className="btn-eliminar"
            onClick={() => onEliminar(proyecto.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProyectoCard;