// src/services/proyectoService.js

let proyectos = [
    { id: 1, título: "Sistema de Gestión Escolar", categoría: "Web", estado: "En curso" },
    { id: 2, título: "App de Delivery", categoría: "Mobile", estado: "Completado" },
    { id: 3, título: "E-commerce de Ropa", categoría: "Web", estado: "Pendiente" },
    { id: 4, título: "Portal de Noticias", categoría: "Web", estado: "En curso" },
    { id: 5, título: "Red Social para Mascotas", categoría: "Mobile", estado: "En curso" }
];

export const obtenerProyectos = () => [...proyectos];

export const agregarProyecto = (nuevo) => {
    proyectos.push(nuevo);
};

export const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
};

export const buscarProyecto = (texto) => {
    return proyectos.filter(p => 
        p.título.toLowerCase().includes(texto.toLowerCase())
    );
};