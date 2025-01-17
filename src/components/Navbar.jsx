import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DIVING SCHOOL
        </Link>

        <button className="menu-icon" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cursos" className="nav-link" onClick={toggleMenu}>
              Cursos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              Sobre Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 