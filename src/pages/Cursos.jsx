import React from 'react';
import { Link } from 'react-router-dom';
import './Cursos.css';

const testimonios = [
  {
    id: 1,
    nombre: "María García",
    curso: "Open Water Diver",
    texto: "Una experiencia increíble. Los instructores son muy profesionales y pacientes.",
    imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    nombre: "Carlos Ruiz",
    curso: "Advanced Open Water",
    texto: "Excelente formación. Me siento mucho más seguro buceando después de este curso.",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    nombre: "Ana Martínez",
    curso: "Rescue Diver",
    texto: "El curso más desafiante y gratificante que he hecho. Totalmente recomendado.",
    imagen: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop"
  }
];

const faqs = [
  {
    pregunta: "¿Necesito tener experiencia previa?",
    respuesta: "No para el curso básico. Para cursos avanzados sí se requiere certificación previa."
  },
  {
    pregunta: "¿Qué equipo necesito?",
    respuesta: "Todo el equipo necesario está incluido en el precio del curso."
  },
  {
    pregunta: "¿Cuánto dura cada curso?",
    respuesta: "La duración varía según el nivel, desde 4-5 días para principiantes hasta 2-3 días para cursos avanzados."
  },
  {
    pregunta: "¿Las certificaciones son internacionales?",
    respuesta: "Sí, todas nuestras certificaciones son reconocidas internacionalmente."
  }
];

/* Comentamos el array de próximos cursos
const proximosCursos = [
  {
    id: 1,
    titulo: "Open Water Diver",
    fecha: "15 Mayo 2024",
    plazas: 8,
    duracion: "4 días",
    horario: "9:00 - 14:00",
    estado: "disponible"
  },
  // ... resto del array
];
*/

const requisitosGenerales = {
  "Open Water Diver": {
    edad: "A partir de 10 años",
    salud: "Buen estado de salud general",
    natacion: "Saber nadar",
    requisitos: [
      "No se requiere experiencia previa",
      "Certificado médico básico",
      "Capacidad para nadar 200 metros",
      "Flotación durante 10 minutos"
    ]
  },
  "Advanced Open Water": {
    edad: "A partir de 12 años",
    salud: "Certificado médico vigente",
    natacion: "Dominio de técnicas básicas",
    requisitos: [
      "Certificación Open Water",
      "Mínimo 20 inmersiones registradas",
      "Experiencia en aguas abiertas",
      "Equipo básico propio (recomendado)"
    ]
  },
  "Rescue Diver": {
    edad: "A partir de 15 años",
    salud: "Certificado médico específico",
    natacion: "Excelente condición física",
    requisitos: [
      "Advanced Open Water",
      "Primeros auxilios y RCP",
      "Mínimo 40 inmersiones registradas",
      "Equipo completo propio"
    ]
  }
};

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      titulo: "Curso Open Water Diver",
      nivel: "Principiante",
      duracion: "4-5 días",
      precio: "400€",
      descripcion: "Tu primera certificación de buceo. Aprende las habilidades básicas para convertirte en buceador certificado.",
      imagen: "https://images.unsplash.com/photo-1601025252036-36faf914679d?q=80&w=2070&auto=format&fit=crop",
      incluye: [
        "Material didáctico",
        "Equipo completo de buceo",
        "Clases teóricas",
        "4 inmersiones en mar abierto",
        "Certificación internacional"
      ]
    },
    {
      id: 2,
      titulo: "Advanced Open Water",
      nivel: "Intermedio",
      duracion: "2-3 días",
      precio: "350€",
      descripcion: "Mejora tus habilidades y experimenta nuevos tipos de buceo, incluyendo buceo profundo y navegación.",
      imagen: "https://images.unsplash.com/photo-1580019542155-247062e19ce4?q=80&w=2074&auto=format&fit=crop",
      incluye: [
        "Material didáctico",
        "Equipo completo de buceo",
        "5 inmersiones especializadas",
        "Certificación Advanced"
      ]
    },
    {
      id: 3,
      titulo: "Rescue Diver",
      nivel: "Avanzado",
      duracion: "4 días",
      precio: "450€",
      descripcion: "Aprende a prevenir y gestionar problemas en el agua. Un paso esencial para convertirte en profesional.",
      imagen: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2070&auto=format&fit=crop",
      incluye: [
        "Material didáctico",
        "Equipo completo de buceo",
        "Prácticas de rescate",
        "Primeros auxilios",
        "Certificación Rescue"
      ]
    }
  ];

  return (
    <div className="cursos-container">
      <section className="cursos-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Descubre Nuestros Cursos</h1>
            <p>Desde tu primera inmersión hasta convertirte en un buceador experto</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Alumnos Certificados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cursos-grid">
        {cursos.map((curso) => (
          <div key={curso.id} className="curso-card">
            <div className="curso-imagen">
              <img src={curso.imagen} alt={curso.titulo} />
              <div className="curso-nivel">{curso.nivel}</div>
            </div>
            <div className="curso-contenido">
              <h2>{curso.titulo}</h2>
              <p className="curso-descripcion">{curso.descripcion}</p>
              <div className="curso-detalles">
                <span>⏱ {curso.duracion}</span>
                <span>💰 {curso.precio}</span>
              </div>
              <div className="curso-incluye">
                <h3>El curso incluye:</h3>
                <ul>
                  {curso.incluye.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="curso-cta">
                Solicitar Información
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="requisitos-section">
        <h2>Requisitos por Nivel</h2>
        <div className="requisitos-grid">
          {Object.entries(requisitosGenerales).map(([curso, info]) => (
            <div key={curso} className="requisitos-card">
              <h3>{curso}</h3>
              <div className="requisitos-info">
                <div className="requisito-item">
                  <span className="requisito-label">Edad:</span>
                  <span>{info.edad}</span>
                </div>
                <div className="requisito-item">
                  <span className="requisito-label">Salud:</span>
                  <span>{info.salud}</span>
                </div>
                <div className="requisito-item">
                  <span className="requisito-label">Natación:</span>
                  <span>{info.natacion}</span>
                </div>
                <div className="requisitos-lista">
                  <h4>Requisitos específicos:</h4>
                  <ul>
                    {info.requisitos.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonios-section">
        <h2>Lo que dicen nuestros alumnos</h2>
        <div className="testimonios-grid">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="testimonio-card">
              <img src={testimonio.imagen} alt={testimonio.nombre} />
              <div className="testimonio-contenido">
                <p>"{testimonio.texto}"</p>
                <h3>{testimonio.nombre}</h3>
                <span>{testimonio.curso}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.pregunta}</h3>
              <p>{faq.respuesta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cursos-cta">
        <div className="cta-content">
          <h2>¿No estás seguro qué curso elegir?</h2>
          <p>Contáctanos y te asesoraremos sobre el mejor curso para ti</p>
          <Link to="/contact" className="cta-button">Contactar</Link>
        </div>
      </section>
    </div>
  );
};

export default Cursos; 