import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const images = {
    heroBg: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    ctaBg: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070&auto=format&fit=crop",
    cursoPrincipiante: "https://images.unsplash.com/photo-1601025252036-36faf914679d?q=80&w=2070&auto=format&fit=crop",
    cursoAvanzado: "https://images.unsplash.com/photo-1580019542155-247062e19ce4?q=80&w=2074&auto=format&fit=crop",
    cursoEspecialidad: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <div className="home">
      <section className="hero" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.heroBg})`
      }}>
        <div className="hero-content">
          <h1>Descubre el Mundo Submarino</h1>
          <p>Aprende a bucear con los mejores profesionales</p>
          <Link to="/cursos" className="cta-button">Ver Cursos</Link>
        </div>
      </section>

      <section className="features">
        <h2>¿Por qué elegirnos?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Instructores Certificados</h3>
            <p>Equipo de profesionales con años de experiencia</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏊‍♂️</div>
            <h3>Cursos Para Todos</h3>
            <p>Desde principiantes hasta niveles avanzados</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Equipamiento Moderno</h3>
            <p>Material de última generación para tu seguridad</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌊</div>
            <h3>Ubicaciones Únicas</h3>
            <p>Los mejores spots de buceo de la zona</p>
          </div>
        </div>
      </section>

      <section className="courses-preview">
        <h2>Nuestros Cursos Más Populares</h2>
        <div className="courses-grid">
          <div className="course-card">
            <img src={images.cursoPrincipiante} alt="Curso Principiante" />
            <div className="course-content">
              <h3>Curso Principiante</h3>
              <p>Perfecto para dar tus primeros pasos en el buceo</p>
              <Link to="/cursos" className="course-button">Más Info</Link>
            </div>
          </div>
          <div className="course-card">
            <img src={images.cursoAvanzado} alt="Curso Avanzado" />
            <div className="course-content">
              <h3>Curso Avanzado</h3>
              <p>Mejora tus habilidades y técnicas de buceo</p>
              <Link to="/cursos" className="course-button">Más Info</Link>
            </div>
          </div>
          <div className="course-card">
            <img src={images.cursoEspecialidad} alt="Especialidades" />
            <div className="course-content">
              <h3>Especialidades</h3>
              <p>Buceo nocturno, profundo y más</p>
              <Link to="/cursos" className="course-button">Más Info</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images.ctaBg})`
      }}>
        <div className="cta-content">
          <h2>¿Listo para Empezar?</h2>
          <p>Únete a nuestra comunidad de buceadores</p>
          <Link to="/contact" className="cta-button">Contáctanos</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 