// src/components/Experience.jsx
import React from 'react';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section className={styles.experience} id='experience'>

      <div
        className={styles.imageBox}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img src="/Imagenes/experience.avif" alt="Local interior" />
      </div>

      <div
        className={styles.contentBox}
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h2>Donde tu estilo encuentra su mejor versión</h2>
        <p>
          Cada corte de pelo, cada afeitado y cada experiencia con nosotros no son solo servicios, sino etapas de un viaje compartido hacia la confianza y la felicidad. Nos enorgullece formar parte de tu historia de belleza y nos entusiasma construir juntos otra década de sonrisas y satisfacción.
        </p>

        <div className={styles.stats}>
          <div
            className={styles.stat}
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <span className={styles.number}>5</span>
            <span className={styles.label}>AÑOS DE EXPERIENCIA</span>
          </div>
          <div
            className={styles.stat}
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <span className={styles.number}>1,000</span>
            <span className={styles.label}>CLIENTES SATISFECHOS</span>
          </div>
          <div
            className={styles.stat}
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <span className={styles.number}>100%</span>
            <span className={styles.label}>ATENCIÓN PERSONALIZADA</span>
          </div>
          <div
            className={styles.stat}
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <span className={styles.number}>+10</span>
            <span className={styles.label}>CERTIFICACIONES EN BARBERÍA</span>
          </div>
        </div>

        <button
          className={styles.cta}
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          Contacto
        </button>
      </div>
    </section>
  );
}

export default Experience;
