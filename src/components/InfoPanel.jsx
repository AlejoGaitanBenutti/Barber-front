// src/components/InfoPanel.jsx
import React from 'react';
import styles from './InfoPanel.module.css';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

function InfoPanel() {
  return (
    <section className={styles.infoPanel}>
      <div className={styles.item}>
        <FaMapMarkerAlt className={styles.icon} />
        <h3>UBICACION</h3>
        <p>1247 IRIGOYEN, Crespo, Entre Rios</p>
        <a href="#map">VER EN MAPA</a>
      </div>

      <div className={styles.item}>
        <FaClock className={styles.icon} />
        <h3>HORARIO DE APERTURA</h3>
        <p>Lunes a viernes: 9.00 - 20.30 horas</p>
        <p>Sábado: 10.00 - 18.30</p>
        <p>Domingo: Cerrado</p>
      </div>

      <div className={styles.item}>
        <FaPhoneAlt className={styles.icon} />
        <h3>CONTACTO</h3>
        <p>3436 (132) 888</p>
        <p>alejogbs8@gmail.com</p>
      </div>
    </section>
  );
}

export default InfoPanel;
