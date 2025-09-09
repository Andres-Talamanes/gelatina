import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Bienvenido a Nora Creaciones</h1>
      <p className={styles.heroSubtitle}>
        Encuentra los productos más exclusivos hechos a mano.
      </p>
    </section>
  );
}
