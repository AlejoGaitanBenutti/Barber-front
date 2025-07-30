import React from 'react';
import styles from './Services.module.css';

const leftServices = [
  { name: 'Corte Clásico', price: '$20' },
  { name: 'Afeitado Tradicional', price: '$30' },
  { name: 'Estilo Moderno', price: '$25' },
  { name: 'Lavado y Masaje Capilar', price: '$15' },
  { name: 'Tratamientos para el Cabello y Hombres', price: '$30' },
  { name: 'Contorno y Esculpido de Barbilla', price: '$15' },
  { name: 'Corte para Niños', price: '$15' },
  { name: 'Coloración de Cabello', price: '$25' },
  { name: 'Corte y Afeitado', price: '$40' },
];

const rightServices = [
  { name: 'Corte Militar', price: '$15' },
  { name: 'Masaje Facial Natural', price: '$25' },
  { name: 'Corte y Afeitado Personalizado', price: '$35' },
  { name: 'Paquetes para Hombres', price: '$50' },
  { name: 'Tratamiento Anti-Edad para Hombres', price: '$40' },
  { name: 'Corte con Máquina y Terminación Manual', price: '$25' },
  { name: 'Tratamiento de Barbilla con Esencias', price: '$20' },
  { name: 'Asesoría de Estilo Masculino', price: '$20' },
  { name: 'Corte Asimétrico Moderno', price: '$30' },
];
const Services = () => {
  return (
    <section className={styles.services} id='services'>
      <h2
        data-aos="fade-up"
        data-aos-duration="800"
      >
        EXPLORA NUESTROS SERVICIOS
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        Experimente la sofisticación, donde la pasión por la barbería se fusiona con la elegancia moderna. Descubra servicios premium y experiencias personalizadas para una apariencia impecable.
      </p>

      <div className={styles.grid}>
        <ul
          className={styles.column}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          {leftServices.map((service, i) => (
            <li key={i}>
              <span>{service.name}</span>
              <span className={styles.price}>{service.price}</span>
            </li>
          ))}
        </ul>

        <ul
          className={styles.column}
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          {rightServices.map((service, i) => (
            <li key={i}>
              <span>{service.name}</span>
              <span className={styles.price}>{service.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={styles.cta}
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        EXPLORA NUESTROS SERVICIOS
      </button>
    </section>
  );
};

export default Services;