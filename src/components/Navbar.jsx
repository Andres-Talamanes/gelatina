import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Gelatinas Nora</h1>
      <ul className={styles.menu}>
        <li><a href="/" className={styles.link}>Inicio</a></li>
        <li><a href="/catalog" className={styles.link}>Catálogo</a></li>
        <li><a href="/cotizador" className={styles.link}>Cotizador</a></li>
        <li><a href="/contacto" className={styles.link}>Contacto</a></li>
      </ul>
    </nav>
  );
}
