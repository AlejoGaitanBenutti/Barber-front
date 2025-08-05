import React, { useState, useEffect } from 'react';
import styles from "../Shop/Shop.module.css";
import CardProducto from '../../components/CardProducto';
import { getAllProductos } from '../../services/productServices';

function Shop() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el spinner

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getAllProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos", error);
      } finally {
        setLoading(false); // Termina la carga
      }
    };

    fetchProductos();
  }, []);

  return (
    <div style={{ borderBottom: "2px solid white" }}>
      <div className={styles.heroShop}>
        <h1 className={styles.heroShopTitle}>EXPLORA NUESTROS PRODUCTOS</h1>
      </div>
      <div className={styles.containerShop}>
        {/* Mostrar spinner mientras carga */}
        {loading ? (
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
          </div>
        ) : (
          <div className={styles.containerCard}>
            {productos.map((producto, index) => (
              <div
                key={producto.id}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                <CardProducto producto={producto} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
