import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={styles.why}>
      <div className={styles.content}>
        <div className={styles.block}>
          <h2>¿POR QUÉ ELEGIRNOS?</h2>
          <p>En Barbershop, somos más que una simple barbería.</p>
        </div>
        <div className={styles.block}>
          <h2>DESCUBRE A NUESTROS <br /> MEJORES BARBEROS</h2>
          <p>
           En Barbershop, nos enorgullece contar con un equipo de excelentes barberos, apasionados por el arte de la barbería y dedicados a brindar el mejor servicio.
          </p>
        </div>
        <div className={styles.block}>
          <h2>EXPERIMENTA NUESTROS<br />SERVICIOS PREMIUM</h2>
          <p>
            En Barbershop, nos comprometemos a brindar un servicio premium que supere tus expectativas.
          </p>
        </div>

        <button className={styles.cta}>Contacto</button>
      </div>

      <div className={styles.image}>
        <img src="/Imagenes/whyChoose.avif" alt="Barbería" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
