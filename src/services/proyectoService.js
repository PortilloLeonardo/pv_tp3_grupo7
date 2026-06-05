const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Implementación de Redes en Escuelas Rurales",
      categoria: "Redes",
      estado: "En curso",
      descripcion:
        "Implementación de infraestructura de red para mejorar la conectividad de escuelas rurales. Se busca optimizar el acceso a recursos digitales y fortalecer el proceso educativo.",
      recursos: ["PDF", "Drive", "GitHub"],
      equipo: [
        { nombre: "Patricia", rol: "Administradora" },
        { nombre: "Leonardo", rol: "coordinador" }
      ]
    },
    {
      id: 2,
      titulo: "Diseño de Interfaces para Plataformas",
      categoria: "Diseño",
      estado: "En curso",
      descripcion:
        "Diseño y prototipado de interfaces centradas en la experiencia de usuario. Incluye investigación, wireframes y validación de usabilidad.",
      recursos: ["Drive"],
      equipo: [
        { nombre: "Patricia", rol: "Diseñadora" }
      ]
    },
    {
      id: 3,
      titulo: "Sistema de Gestión de Trabajos Prácticos",
      categoria: "Programación",
      estado: "En curso",
      descripcion:
        "Sistema para administrar entregas, correcciones y evaluaciones de trabajos prácticos de estudiantes.",
      recursos: ["GitHub", "PDF"],
      equipo: [
        { nombre: "Cristian", rol: "Desarrollador" }
      ]
    },
    {
      id: 4,
      titulo: "Configuración de Usuarios y Privilegios",
      categoria: "Base de Datos",
      estado: "En curso",
      descripcion:
        "Administración de usuarios, roles y permisos para garantizar la seguridad de la información.",
      recursos: ["PDF", "Drive"],
      equipo: [
        { nombre: "Martin", rol: "DBA" }
      ]
    },
    {
      id: 5,
      titulo: "Tipos de Redes",
      categoria: "Redes",
      estado: "En curso",
      descripcion:
        "Análisis y clasificación de redes informáticas según alcance, topología y tecnología utilizada.",
      recursos: ["PDF", "GitHub"],
      equipo: [
        { nombre: "Nicolas", rol: "Administrador" }
      ]
    }
  ];

  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (proyecto) => {
    proyectos.push(proyecto);
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(
      (proyecto) => proyecto.id !== id
    );
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter((proyecto) =>
      proyecto.titulo
        .toLowerCase()
        .includes(texto.toLowerCase())
    );
  };


  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();

export default proyectoService;