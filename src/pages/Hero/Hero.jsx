// src/Page/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';



function Hero() {
  return (
   <> 
    
    <section className={styles.hero}>
        <div className={styles.overlay}></div> {/* la capa negra */}
        <div className={styles.content}>
            <h1 className={styles.title}>Estilo y tradición en cada corte</h1>
            <p className={styles.subtitle}>Descubre una experiencia inolvidable donde el estilo se fusiona con la tradición y cada corte se convierte en una declaración de tu individualidad.</p>
            <button className={styles.cta}>Reservar turno</button>
        </div>
        </section>
    </>
  );
}

export default Hero;
