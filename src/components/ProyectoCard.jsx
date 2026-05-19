
import React from 'react';


const ProyectoCard = ({ proyecto, onEliminar }) => {
  
  
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="proyecto">
    
      <img src="https://via.placeholder.com/200" alt={titulo} />
      
      <div className="informacion">
        {/* Mostramos solo lo solicitado: título, categoría y estado */}
        <h3>{titulo}</h3>
        <p><strong>Categoría:</strong> {categoria}</p>
        <p><strong>Estado:</strong> {estado}</p>
        
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          
          <button 
            onClick={() => onEliminar(id)} // Pasa el id desestructurado
            style={{
              backgroundColor: '#e73131',
              color: 'white',
              padding: '0.8rem 1.2rem',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            Eliminar
          </button>

          <button 
            onClick={() => alert(`Detalle del proyecto ID: ${id}`)} // Funcionalidad base temporal
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '0.8rem 1.2rem',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            Ver Detalle
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProyectoCard;