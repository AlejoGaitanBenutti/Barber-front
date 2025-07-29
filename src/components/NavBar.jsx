// src/components/Navbar.jsx
import React from 'react';
import styles from './NavBar.module.css';
import { useState } from 'react';
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi';


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#/"><img src="/Imagenes/logo.png" alt="Logo barbería" /></a>
      </div>
      <ul className={styles.links}>
        <li><a href="#experience">NOSOTROS</a></li>
        <li><a href="#services">SERVICIOS</a></li>
        <li><a href="/shop">PRODUCTOS</a></li>
        <li><a href="#pricing">PRECIOS</a></li>
        <li><a href="#equipo">EQUIPO</a></li>
        <li><a href="#gallery">GALERIA</a></li>
        <li><a href="#contact">CONTACTO</a></li>
      </ul>
      <div className={styles.phone}>
        <button>543 (613) 2888</button>
      </div>

       {isMenuOpen && (
         <div className={styles.menuMobile}>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>NOSOTROS</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>SERVICIOS</a>
          <a href="/shop" onClick={() => setIsMenuOpen(false)}>PRODUCTOS</a>
          <a href="#precios" onClick={() => setIsMenuOpen(false)}>PRECIOS</a>
          <a href="#equipo" onClick={() => setIsMenuOpen(false)}>EQUIPO</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>GALERIA</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>CONTACTO</a>
        </div>
      )}
        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}> 
          {isMenuOpen ? <HiOutlineX size={28} />  : <HiOutlineMenu size={28}/>}
      </button>

     
      
    </nav>
  );
}

export default Navbar;
