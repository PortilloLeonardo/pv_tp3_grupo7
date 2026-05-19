import React, { useState, useEffect } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  // Cargar proyectos al inicio
  useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  const handleEliminar = (id) => {
    eliminarProyecto(id);
    setProyectos(obtenerProyectos());
  };

  const handleBuscar = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    
    if (texto.trim() === '') {
      setProyectos(obtenerProyectos());
    } else {
      setProyectos(buscarProyecto(texto));
    }
  };

  return (
    <div id="listado-proyectos">
      <h2>Lista de Proyectos</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar proyecto por título..."
        value={busqueda}
        onChange={handleBuscar}
        style={{
          width: '100%',
          padding: '1rem',
          fontSize: '1.6rem',
          marginBottom: '2rem',
          borderRadius: '0.5rem',
          border: '1px solid #666'
        }}
      />

      <div className="contenedor-proyectos">
        {proyectos.length === 0 ? (
          <p>No se encontraron proyectos.</p>
        ) : (
          proyectos.map(proyecto => (
            <div key={proyecto.id} className="proyecto">
              <img src="https://via.placeholder.com/200" alt={proyecto.titulo} />
              <div className="informacion">
                <h3>{proyecto.titulo}</h3>
                <p><strong>Categoría:</strong> {proyecto.categoria}</p>
                <p><strong>Estado:</strong> {proyecto.estado}</p>
                
                <button 
                  onClick={() => handleEliminar(proyecto.id)}
                  style={{
                    backgroundColor: '#e73131',
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    marginTop: '1rem'
                  }}
                >
                  Eliminar Proyecto
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListaProyectos;
