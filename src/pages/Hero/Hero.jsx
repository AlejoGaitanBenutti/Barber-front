// src/Page/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';


function Hero() {
  return (
   <> 
    
    <section className={styles.hero}>
        <div className={styles.overlay}></div> {/* la capa negra */}
        <div className={styles.content}>
            <h1 className={styles.title}>Estilo y tradición en cada corte</h1>
            <p className={styles.subtitle}>Descubre una experiencia inolvidable donde el estilo se fusiona con la tradición y cada corte se convierte en una declaración de tu individualidad.</p>
            <button className={styles.cta}><a style={{color:"black", textDecoration:"none", fontWeight:"600" }} href="https://wa.me/5436132888" target='_blanl' rel="noopener noreferrer">Reservar turno</a></button>
        </div>
        </section>
    </>
  );
}

export default Hero;
