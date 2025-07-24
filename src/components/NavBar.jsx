// src/components/Navbar.jsx
import React from 'react';
import styles from './NavBar.module.css';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/Imagenes/logo.png" alt="Logo barbería" />
      </div>
      <ul className={styles.links}>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICIOS</a></li>
        <li><a href="#products">PRODUCTOS</a></li>
        <li><a href="#pricing">PRECIOS</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#gallery">GALERIA</a></li>
        <li><a href="#contact">CONTACO</a></li>
      </ul>
      <div className={styles.phone}>
        <button>543 (613) 2888</button>
      </div>
    </nav>
  );
}

export default Navbar;
