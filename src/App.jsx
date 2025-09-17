function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const { data } = await supabase.from("productos").select("*");
      setProductos(data || []);
    };
    fetchProductos();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCard productos={productos} />
      <Footer />
    </div>
  );
}
