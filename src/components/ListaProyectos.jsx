import proyectoService from "../services/proyectoService";
import { useState } from "react";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos()
  );

  const [textoBusqueda, setTextoBusqueda] = useState("");

  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState(null);

  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "En curso",
    descripcion: "",
    recursos: "",
    equipo: ""
  });

  const proyectosFiltrados =
    textoBusqueda === ""
      ? proyectos
      : proyectoService.buscarProyecto(textoBusqueda);

  const handleBuscar = (e) => {
    setTextoBusqueda(e.target.value);
  };

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleVerDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const handleAgregarProyecto = () => {
    proyectoService.agregarProyecto({
      id: Date.now(),
      titulo: formulario.titulo,
      categoria: formulario.categoria,
      estado: formulario.estado,
      descripcion: formulario.descripcion,
      recursos: formulario.recursos
        .split(",")
        .map((item) => item.trim()),
      equipo: formulario.equipo
        .split(",")
        .map((item) => {
          const [nombre, rol] = item.split("-");
          return {
            nombre: nombre?.trim(),
            rol: rol?.trim()
          };
        })
    });

    setProyectos(proyectoService.obtenerProyectos());

    setFormulario({
      titulo: "",
      categoria: "",
      estado: "En curso",
      descripcion: "",
      recursos: "",
      equipo: ""
    });
  };

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  return (
    <div id="listado-proyectos">
      <h2>Lista de Proyectos Educativos</h2>
      <input
        className="input-busqueda"
        type="text"
        placeholder="Buscar proyecto..."
        value={textoBusqueda}
        onChange={handleBuscar}
      />

      <div className="Barra-filtros">
        <div className="campo-inicial">
          <input
          type="text"
          name="titulo"
          placeholder="Título del proyecto"
          className="campo-titulo"
          value={formulario.titulo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          className="campo-categoria"
          value={formulario.categoria}
          onChange={handleChange}
        />
        <input
          type="text"
          name="recursos"
          placeholder="PDF, Drive, GitHub"
          className="campo-recursos"
          value={formulario.recursos}
          onChange={handleChange}
        />

        <input
          type="text"
          name="equipo"
          placeholder="Nombre-Rol, Nombre-Rol"
          className="campo-equipo"
          value={formulario.equipo}
          onChange={handleChange}
        />
        <select
          name="estado"
          value={formulario.estado}
          onChange={handleChange}
        >
          <option value="En curso">En curso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        </div>
        <textarea
          name="descripcion"
          placeholder="Descripción"
          className="campo-descripcion"
          value={formulario.descripcion}
          onChange={handleChange}
        />

        

        

        <button
          className="btn-crear"
          onClick={handleAgregarProyecto}
        >
          Agregar Proyecto
        </button>
      </div>

      <div className="contenedor-proyectos">
        {proyectosFiltrados.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={handleEliminar}
            onVerDetalle={handleVerDetalle}
          />
        ))}
      </div>

      <DetalleProyecto proyecto={proyectoSeleccionado} />
    </div>
  );
};

export default ListaProyectos;