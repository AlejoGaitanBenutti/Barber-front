import React, { useEffect, useState } from 'react';
import styles from './ListaProductos.module.css';
import { getAllProductos } from '../services/productServices';
import CardProducto from './CardProducto';

const ListaProductos = () => {


  const [productos, setProductos]= useState([]);

  useEffect(()=>{

    const fetchProductos = async () =>{
      const data =  await getAllProductos();

      setProductos(data);

    }

    fetchProductos();


  },
  []);

  return (
    <section className={styles.productos}>
    <div className={styles.container}>
        
        <div className={styles.containerTitles}>
            <div>
                    <h2 className={styles.titulo}>Nuestros Productos</h2>
                    <p className={styles.subtitulo}>No nos limitamos a servicios de barbería de alta calidad, sino que también le damos un toque de lujo a su hogar. Explore nuestra gama de productos premium para el cuidado del cabello y la barba, cuidadosamente seleccionados para brindarle una experiencia de barbería completa todos los días.        </p>
            </div>
            <div>
                <button>
                    VER PRODUCTOS
                </button>
            </div>

        </div>
        <div className={styles.grid}>
            {productos.slice(0, 4).map((producto) => (
              <CardProducto key={producto.id} producto={producto} />
            ))}
        </div>

    </div>

    </section>
  );
};

export default ListaProductos;
