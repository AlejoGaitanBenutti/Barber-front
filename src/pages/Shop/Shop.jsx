import React from 'react';
import styles from "../Shop/Shop.module.css"
import CardProducto from '../../components/CardProducto';
import { useState, useEffect } from 'react';
import { getAllProductos } from '../../services/productServices';


function Shop(){

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
console.log("API URL usada en frontend:", import.meta.env.VITE_API_URL);
        const fetchProductos = async () =>{
            const data = await getAllProductos();

            setProductos(data);
        }

        fetchProductos();
    }
    ,[])

    return(

    <div style={{borderBottom:"2px solid white"}} >
        <div className={styles.heroShop}>
            <h1 className={styles.heroShopTitle}>EXPLORA NUESTROS PRODUCTOS</h1>
        </div>
        <div className={styles.containerShop}>
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
        </div>

    </div>

    )
}

export default Shop;


