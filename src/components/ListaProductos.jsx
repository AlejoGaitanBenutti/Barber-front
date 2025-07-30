import React, { useEffect, useState } from 'react';
import styles from './ListaProductos.module.css';
import { getAllProductos } from '../services/productServices';
import CardProducto from './CardProducto';
import { Link } from 'react-router-dom';

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getAllProductos();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  return (
    <section className={styles.productos}>
      <div className={styles.container}>
        <div className={styles.containerTitles}>
          <div>
            <h2
              className={styles.titulo}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Nuestros Productos
            </h2>
            <p
              className={styles.subtitulo}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              No nos limitamos a servicios de barbería de alta calidad, sino que también le damos un toque de lujo a su hogar. Explore nuestra gama de productos premium para el cuidado del cabello y la barba, cuidadosamente seleccionados para brindarle una experiencia de barbería completa todos los días.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link to="/shop">
              <button>VER PRODUCTOS</button>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {productos.slice(0, 4).map((producto, i) => (
            <div
              key={producto.id}
              data-aos="fade-up"
              data-aos-delay={100 * (i + 1)}
              data-aos-duration="700"
            >
              <CardProducto producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListaProductos;
