import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "/Imagenes/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Sección superior */}
      <div className={styles.containerTop}>
        <div className={styles.top}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p className={styles.description}>
            Descubre una experiencia inolvidable donde el estilo se encuentra con la tradición.
          </p>
        </div>
      </div>
      {/* Redes sociales */}
      <div className={styles.social}>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaTwitter /></a>
      </div>

      {/* Sección media: newsletter + enlaces */}
      <div className={styles.middle}>
        <div className={styles.newsletter}>
          <h4>SUSCRÍBETE A NUESTRO BOLETÍN</h4>
          <form>
            <input type="email" placeholder="nombre@gmail.com" />
            <button type="submit">Suscribirme</button>
          </form>
        </div>

        <div className={styles.links}>
          <h4>SECCIONES</h4>
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">SERVICIOS</a></li>
            <li><a href="#">GALERÍA</a></li>
            <li><a href="#">CONTACTO</a></li>
          </ul>
        </div>
      </div>

      {/* Footer final */}
      <div className={styles.bottom}>
        <p>©2025. Diseñado por Alejo. Todos los derechos reservados.</p>
        <div>
          <a href="#">Política de Privacidad</a> |
          <a href="#">Términos de uso</a> |
          <a href="#">Instrucciones</a>
        </div>
      </div>
    </footer>
  );
}
