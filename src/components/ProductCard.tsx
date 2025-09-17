import styles from './ProductCard.module.css';

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.price}>Desde ${price}</p>
      <button className={styles.button}>Agregar al presupuesto</button>
    </div>
  );
}
