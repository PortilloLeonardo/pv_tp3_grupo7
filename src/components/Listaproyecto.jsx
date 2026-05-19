import React from 'react';

const Listaproyecto = () => {
  return (
    <>
      <section id="introduccion">
        <h2>Bienvenido a la Plataforma FI UNJu.</h2>
        <p>Este es un foro abierto para estudiantes y docentes de la institucion donde el objetivo es construir conocimiento compartido. Aquí podés publicar avances de tus proyectos, resolver dudas técnicas o debatir sobre las últimas novedades de nuestras cátedras.</p>
        <button type="button" className="btn-crear">Crear proyecto +</button>
      </section>

      <section id="estadisticas">
        <div><h2>Resumen del sistema</h2></div>
        <div className="contenedor-card">
          <div className="card" tabIndex="0">
            <span className="etiqueta">Proyectos totales</span>
            <span className="valor">12</span>
          </div>
          <div className="card" tabIndex="0">
            <span className="etiqueta">Tareas para hoy</span>
            <span className="valor">18</span>
          </div>
          <div className="card" tabIndex="0">
            <span className="etiqueta">Mensajes pendientes</span>
            <span className="valor">32</span>
          </div>
        </div>
      </section>

      <section id="novedades">
        <h2>Lista de Proyectos Educativos y Novedades</h2>
        <div className="articulos">
          
          <article className="noticia">
            <h3>Se ha cargado una actualización para el inicio.</h3>
            <div className="miniatura">
              <img className="foto" src="assets/img/imagen-noticia.jfif" alt="imagen-noticia." />
              <div className="resumen">
                <p className="descripcion">Se han añadido nuevos articulos y una nueva interface para el usuario.</p>
                <p className="publicacion">Portillo Leonardo - 29/04/2026</p>
              </div>
            </div>
          </article>

          <article className="noticia">
            <h3>Nuevo sistema de carga de Trabajos Prácticos.</h3>
            <div className="miniatura">
              <img className="foto" src="assets/img/imagen-noticia.jfif" alt="imagen-noticia." />
              <div className="resumen">
                <p className="descripcion">La presentacion de los trabajos prácticos deberan realizarse mediante repositorios.</p>
                <p className="publicacion">Ramos Martin - 28/04/2026</p>
              </div>
            </div>
          </article>

          <article className="noticia">
            <h3>Las notas del trabajo práctico 1 ya fueron publicadas.</h3>
            <div className="miniatura">
              <img className="foto" src="assets/img/imagen-noticia.jfif" alt="imagen-noticia." />
              <div className="resumen">
                <p className="descripcion">Las correcciones de los trabajos ya fue publicada y cuentan con detalles en su devolución.</p>
                <p className="publicacion">Apaza Carolina - 24/04/2026</p>
              </div>
            </div>
          </article>

        </div>
      </section>
    </>
  );
};

export default Listaproyecto;