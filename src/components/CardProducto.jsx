import styles from './ListaProductos.module.css';


const CardProducto = ({ producto }) => {
  return (
    <div className={styles.card}>
      <img src={producto.imagen_principal} alt={producto.nombre} className={styles.imagen} />
      <div className={styles.cardContent}>
        <div>
          <h3 className={styles.nombre}>{producto.nombre}</h3>
          <p className={styles.descripcion}>{producto.subtitulo}</p>
        </div>
        <div>
          <p className={styles.precio}>${producto.precio}</p>
          <button className={styles.boton}>
            <a 
                href={`https://wa.me/5491122334455?text=Hola! Estoy interesado en el producto: ${producto.nombre}`}
                target="_blank"
                rel="noopener noreferrer"> Comprar</a></button>
        </div>
      </div>
    </div>
  );
};



export default CardProducto;