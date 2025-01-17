import React from 'react';
import './About.css';
import Slider from 'react-slick';
import { FaShieldAlt, FaCertificate, FaHeart, FaUsers, FaFacebook, FaInstagram } from 'react-icons/fa';

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Conoce Nuestra Escuela de Buceo</h1>
        <p>Tu aventura de buceo comienza aquí</p>
      </section>

      <section className="gallery">
        <h2>Galería de Cursos</h2>
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/600/300?random=1" alt="Curso 1" />
          </div>
          <div>
            <img src="https://picsum.photos/600/300?random=2" alt="Curso 2" />
          </div>
          <div>
            <img src="https://picsum.photos/600/300?random=3" alt="Curso 3" />
          </div>
          <div>
            <img src="https://picsum.photos/600/300?random=4" alt="Curso 4" />
          </div>
        </Slider>
      </section>

      <section className="about-history">
        <h2>Nuestra Historia</h2>
        <p>
          Fundada en 2010, nuestra escuela de buceo ha estado ofreciendo experiencias inolvidables a buceadores de todos los niveles. 
          Nos apasiona el buceo y estamos comprometidos a proporcionar la mejor formación y seguridad a nuestros alumnos.
        </p>
        <p>
          A lo largo de los años, hemos formado a miles de buceadores, y nuestra reputación se basa en la calidad de nuestra enseñanza y la satisfacción de nuestros alumnos.
        </p>
      </section>

      <section className="about-team">
        <h2>Conoce a Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Instructor 1" />
            <h3>Juan Pérez</h3>
            <p>Instructor Principal</p>
            <p>Con más de 15 años de experiencia, Juan es un apasionado del buceo y la enseñanza.</p>
            <div className="social-links">
              <button onClick={() => alert('Enlace no disponible')} aria-label="Facebook Juan Pérez"><FaFacebook /></button>
              <button onClick={() => alert('Enlace no disponible')} aria-label="Instagram Juan Pérez"><FaInstagram /></button>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Instructor 2" />
            <h3>María López</h3>
            <p>Instructora de Buceo Avanzado</p>
            <p>María se especializa en cursos avanzados y rescate, asegurando la seguridad de todos.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook María López"><FaFacebook /></a>
              <a href="#" aria-label="Instagram María López"><FaInstagram /></a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Instructor 3" />
            <h3>Carlos Ruiz</h3>
            <p>Instructor de Rescate</p>
            <p>Carlos es un experto en técnicas de rescate y siempre está dispuesto a ayudar.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook Carlos Ruiz"><FaFacebook /></a>
              <a href="#" aria-label="Instagram Carlos Ruiz"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Nuestros Valores</h2>
        <div className="values-list">
          <div className="value-item">
            <FaShieldAlt className="value-icon" />
            <h3>Seguridad</h3>
            <p>La seguridad de nuestros alumnos es nuestra prioridad.</p>
          </div>
          <div className="value-item">
            <FaCertificate className="value-icon" />
            <h3>Calidad</h3>
            <p>Ofrecemos formación de alta calidad con instructores certificados.</p>
          </div>
          <div className="value-item">
            <FaHeart className="value-icon" />
            <h3>Pasión</h3>
            <p>Amamos el buceo y queremos compartir esa pasión contigo.</p>
          </div>
          <div className="value-item">
            <FaUsers className="value-icon" />
            <h3>Comunidad</h3>
            <p>Fomentamos un ambiente amigable y de apoyo entre nuestros buceadores.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 