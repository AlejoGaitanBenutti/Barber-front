// src/components/Experience.jsx
import React from 'react';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section className={styles.experience} id='experience'>
      <div className={styles.imageBox}>
        <img src="/Imagenes/experience.avif" alt="Local interior" />
      </div>

      <div className={styles.contentBox}>
        <h2>Donde tu estilo encuentra su mejor versión</h2>
        <p>
          Cada corte de pelo, cada afeitado y cada experiencia con nosotros no son solo servicios, sino etapas de un viaje compartido hacia la confianza y la felicidad. Nos enorgullece formar parte de tu historia de belleza y nos entusiasma construir juntos otra década de sonrisas y satisfacción.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.number}>5</span>
            <span className={styles.label}>AÑOS DE EXPERIENCIA</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>1,000</span>
            <span className={styles.label}>CLIENTES SATISFECHOS</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>100%</span>
            <span className={styles.label}>ATENCIÓN PERSONALIZADA</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>+10</span>
            <span className={styles.label}>CERTIFICACIONES EN BARBERÍA</span>
          </div>
        </div>

        <button className={styles.cta}>Contacto</button>
      </div>
    </section>
  );
}

export default Experience;
