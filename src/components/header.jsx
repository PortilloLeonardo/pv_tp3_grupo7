import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="presentacion">
        <div className="contenendor-logo">
          {}
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
