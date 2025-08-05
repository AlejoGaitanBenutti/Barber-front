import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const bar = document.querySelector(`.${styles.scrollProgress}`);
      if (bar) {
        bar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Este efecto escucha cambios de ubicación para hacer scroll si vino con estado scrollTo
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const selector = location.state.scrollTo;
      const element = document.querySelector(selector);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Limpiamos el estado para que no haga scroll otra vez si vuelve a renderizar
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleAnchorClick = (anchor) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: anchor } });
    } else {
      const section = document.querySelector(anchor);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
  <Link to="/">
    <img src="/Imagenes/logo.png" alt="Logo barbería" />
  </Link>
</div>
      <ul className={styles.links}>
        <li><button onClick={() => handleAnchorClick('#experience')}>NOSOTROS</button></li>
        <li><button onClick={() => handleAnchorClick('#services')}>SERVICIOS</button></li>
        <li><button onClick={() => { navigate('/shop'); setIsMenuOpen(false); }}>PRODUCTOS</button></li>
        <li><button onClick={() => handleAnchorClick('#equipo')}>EQUIPO</button></li>
        <li><button onClick={() => handleAnchorClick('#gallery')}>GALERIA</button></li>
        <li><button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}>CONTACTO</button></li>
      </ul>
      <div className={styles.phone}>
        <button>543 (613) 2888</button>
      </div>

      {isMenuOpen && (
        <div className={styles.menuMobile}>
          <button onClick={() => handleAnchorClick('#experience')}>NOSOTROS</button>
          <button onClick={() => handleAnchorClick('#services')}>SERVICIOS</button>
          <button onClick={() => { navigate('/shop'); setIsMenuOpen(false); }}>PRODUCTOS</button>
          <button onClick={() => handleAnchorClick('#equipo')}>EQUIPO</button>
          <button onClick={() => handleAnchorClick('#gallery')}>GALERIA</button>
          <button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}>CONTACTO</button>
        </div>
      )}
      <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
      </button>

      <div className={styles.scrollProgress}></div>
    </nav>
  );
}

export default Navbar;
