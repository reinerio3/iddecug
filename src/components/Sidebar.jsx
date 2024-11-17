import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre nosotros</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
