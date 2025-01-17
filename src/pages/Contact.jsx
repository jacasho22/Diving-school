import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.asunto) newErrors.asunto = 'El asunto es obligatorio';
    if (!formData.mensaje) newErrors.mensaje = 'El mensaje es obligatorio';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      console.log('Formulario enviado:', formData);
      setSuccessMessage('¡Mensaje enviado con éxito!');
      setErrors({});
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contacta con Nosotros</h1>
        <p>Estamos aquí para resolver todas tus dudas</p>
      </section>

      <div className="contact-content">
        <section className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Dirección</h3>
            <p>Calle del Mar 123</p>
            <p>29001 Málaga</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Teléfono</h3>
            <p>+34 952 123 456</p>
            <p>Lun - Vie: 9:00 - 18:00</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email</h3>
            <p>info@divingschool.com</p>
            <p>Respondemos en 24h</p>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="form-container">
            <h2>Envíanos un mensaje</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
                {errors.nombre && <p className="error-message">{errors.nombre}</p>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu email"
                    required
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Asunto"
                  required
                />
                {errors.asunto && <p className="error-message">{errors.asunto}</p>}
              </div>

              <div className="form-group">
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                  required
                  rows="5"
                ></textarea>
                {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}
              </div>

              <button type="submit" className="submit-button">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </div>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12787.465425769957!2d-4.4214!3d36.7213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQzJzE2LjgiTiA0wrAyNScxNy4wIlc!5e0!3m2!1ses!2ses!4v1234567890!5m2!1ses!2ses"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación"
        ></iframe>
      </section>

      <section className="social-section">
        <h2>Síguenos en Redes Sociales</h2>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact; 