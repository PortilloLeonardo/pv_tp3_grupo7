const Header = () => {
  return (
    <header>
      <section className="presentacion">
        <div className="titulo">
          <h1>Plataforma de Gestión de Proyectos</h1>
        </div>
        <div className="contenedor-logo">
          <img 
            className="logo" 
            src="assets/img/fi-logo.png" 
            alt="Logo de la Facultad de ingenieria-unju." 
          />
        </div>
      </section>
    </header>
  );
};

export default Header;