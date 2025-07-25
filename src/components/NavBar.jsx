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
        <img src="/Imagenes/logo.png" alt="Logo barbería" />
      </div>
      <ul className={styles.links}>
        <li><a href="#about">NOSOTROS</a></li>
        <li><a href="#services">SERVICIOS</a></li>
        <li><a href="#products">PRODUCTOS</a></li>
        <li><a href="#pricing">PRECIOS</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#gallery">GALERIA</a></li>
        <li><a href="#contact">CONTACTO</a></li>
      </ul>
      <div className={styles.phone}>
        <button>543 (613) 2888</button>
      </div>

       {isMenuOpen && (
         <div className={styles.menuMobile}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>NOSOTROS</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>SERVICIOS</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>PRODUCTOS</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>PRECIOS</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>BLOG</a>
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
