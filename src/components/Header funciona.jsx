import React, { useState } from 'react';
import '../Styles/Header.css';

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="logo">Mi Logo</div>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre nosotros</a></li>
          <li 
            className="menu-item"
            onMouseEnter={toggleSubMenu}
            onMouseLeave={toggleSubMenu}
          >
            <a href="#services">Servicios</a>
            {isSubMenuOpen && (
              <ul className="submenu">
                <li><a href="#web-development">Desarrollo Web</a></li>
                <li><a href="#mobile-apps">Aplicaciones Móviles</a></li>
                <li><a href="#seo">SEO</a></li>
              </ul>
            )}
          </li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
