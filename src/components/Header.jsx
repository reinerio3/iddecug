import React, { useState, useEffect } from 'react';
import '../Styles/Header.css';
import logo from '../images/conexion2.png';  // Importa la imagen

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de scroll cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" width={40} />
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#tienda">Tienda</a></li>
          <li 
            className="menu-item"
            onMouseEnter={toggleSubMenu}
            onMouseLeave={toggleSubMenu}
          >
            <a href="#redes">Redes</a>
            {isSubMenuOpen && (
              <ul className="submenu">
                <li><a href="#mujeres">Red de Mujeres Conectadas</a></li>
                <li><a href="#generacion">Red de Generación Emergentes</a></li>
                <li><a href="#educacion">Red de Educación</a></li>
              </ul>
            )}
          </li>
          <li><a href="#contact">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
