// src/components/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contacto">
      <div className={styles.contactContainer}>
        {/* Panel Izquierdo */}
        <div 
            className={styles.contactInfo}
            data-aos="fade-right"
            data-aos-duration="1000"
            >
                
          <h2>CONTÁCTENOS</h2>
          <p>Si tiene alguna pregunta o necesita ayuda fuera del horario comercial, póngase en contacto con nosotros.</p>

          <p><strong>CORREO:</strong> bandidos@gmail.com</p>
          <p><strong>TELÉFONO:</strong> 343 (6132) 888</p>

          <p><strong>HORARIO COMERCIAL:</strong></p>
          <ul>
            <li>Lunes a viernes: 9.00 - 20.30 horas</li>
            <li>Sábado: 10.00 - 18.30</li>
            <li>Dom: Cerrado</li>
          </ul>

          <div className={styles.map}>
            <iframe
              title="Mapa ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.782751424443!2d4.891084276877014!3d52.37306487204859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c2ffb9c9a9%3A0x3cd9e7c5422bfb3f!2sAmsterdam!5e0!3m2!1sen!2snl!4v1655912646442!5m2!1sen!2snl"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Panel Derecho */}
        <div 
            className={styles.contactForm}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            >
          
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo" required />
            <textarea placeholder="Mensaje" rows="8" required></textarea>
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
