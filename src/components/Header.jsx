import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="presentacion">
        <div className="contenendor-logo">
          {/* Si tenés un logo en src/assets/logo.png, podés usarlo */}
          <img src="/logo.png" className="logo" alt="Logo" />
        </div>
        <div className="titulo">
          <h1>Gestión de Proyectos Educativos</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
