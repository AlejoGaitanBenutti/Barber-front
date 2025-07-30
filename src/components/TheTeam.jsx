import React from 'react';
import styles from './TheTeam.module.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  { img: '/Imagenes/team-1.avif', alt: 'Benjamin Foster' },
  { img: '/Imagenes/team-2.avif', alt: 'James Mitchell' },
  { img: '/Imagenes/team-3.avif', alt: 'Ethan Reynolds' },
  { img: '/Imagenes/team-4.avif', alt: 'Alexander Turner' },
];

const TheTeam = () => {
  return (
    <section className={styles.theTeamSection} id='equipo'>
      <div className={styles.teamContent}>
        <h2
          className={styles.teamTitle}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          NUESTRO EQUIPO
        </h2>

        <p
          className={styles.teamDescription}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Cada miembro de nuestro equipo cuenta con una amplia experiencia profesional en el sector de la peluquería. Con años de experiencia y una mejora continua, estamos preparados para ofrecer el mejor servicio en cada barbería.
        </p>
      </div>

      <div className={styles.teamGallery}>
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className={styles.memberCard}
            data-aos="zoom-in"
            data-aos-delay={150 + i * 100}
            data-aos-duration="800"
          >
            <img src={member.img} alt={member.alt} className={styles.teamMemberImg} />
            <div className={styles.overlay}>
              <p className={styles.memberName}>{member.alt}</p>
              <p className={styles.expecialist}>Expert Barber</p>
              <div className={styles.socialIcons}>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheTeam;
