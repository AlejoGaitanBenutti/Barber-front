import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={styles.why}>
      <div className={styles.content}>
        <div
          className={styles.block}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <h2>¿POR QUÉ ELEGIRNOS?</h2>
          <p>En Barbershop, somos más que una simple barbería.</p>
        </div>

        <div
          className={styles.block}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <h2>DESCUBRE A NUESTROS <br /> MEJORES BARBEROS</h2>
          <p>
            En Barbershop, nos enorgullece contar con un equipo de excelentes barberos, apasionados por el arte de la barbería y dedicados a brindar el mejor servicio.
          </p>
        </div>

        <div
          className={styles.block}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <h2>EXPERIMENTA NUESTROS<br />SERVICIOS PREMIUM</h2>
          <p>
            En Barbershop, nos comprometemos a brindar un servicio premium que supere tus expectativas.
          </p>
        </div>

        <button
          className={styles.cta}
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="700"
        >
          Contacto
        </button>
      </div>

      <div
        className={styles.image}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src="/Imagenes/whyChoose.avif" alt="Barbería" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
