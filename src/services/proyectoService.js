const proyectoService = ( ()=>{
    let proyectos = [
        { id: 1, titulo: "Sistema de inventario", categoria: "Programacion", estado: "En curso"},
        { id: 2, titulo: "Diseño Web Institucional", categoria: "Diseño", estado: "En curso"},
        { id: 3, titulo: "Base de datos Escolar", categoria: "Base de datos", estado: "En curso"},
        { id: 4, titulo: "Configuracion de Red", categoria: "Redes", estado: "En curso"},
        { id: 5, titulo: "App de Cursos", categoria: "Programacion", estado: "En curso"}
    ]
    const obtenerProyectos = () => [...proyectos]

    const agregarProyecto = (proyecto) => {
        const nuevoProyecto = { id: Date.now(), ...proyecto }
        proyectos = [...proyectos, nuevoProyecto]
        return nuevoProyecto
    }
    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id)
    }
    const buscarProyecto = (texto) => {
        return proyectos.filter(proyecto => proyecto.titulo.toLowerCase().includes(texto.toLowerCase()))
    }
    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    }
})()
export default proyectoService