import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo o nombre */}
        <div className={styles.footerLogo}>Nora Creaciones</div>

        {/* Enlaces */}
        <div className={styles.footerLinks}>
          <a href="#home">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </div>

        {/* Redes sociales */}
        <div className={styles.footerSocials}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} Nora Creaciones. Todos los derechos reservados.
      </div>
    </footer>
  );
}
