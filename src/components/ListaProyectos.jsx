import React, { useState, useEffect } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  const handleEliminar = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este proyecto?')) {
      eliminarProyecto(id);
      setProyectos(obtenerProyectos());
    }
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
      <h2>Lista de Proyectos Educativos</h2>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar por título del proyecto..."
        value={busqueda}
        onChange={handleBuscar}
        className="buscador"
      />

      <div className="contenedor-proyectos">
        {proyectos.length === 0 ? (
          <p>No se encontraron proyectos con ese criterio.</p>
        ) : (
          proyectos.map((proyecto) => (
            <ProyectoCard 
              key={proyecto.id} 
              proyecto={proyecto} 
              onEliminar={handleEliminar}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListaProyectos;