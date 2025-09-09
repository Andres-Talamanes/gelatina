// App.tsx
import React from "react";

// Importamos los componentes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
