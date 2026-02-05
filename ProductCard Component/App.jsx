const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [category, setCategory] = React.useState("all");
  const [search, setSearch] = React.useState("");

  const [products, setProducts] = React.useState([
    // FOOD
    { id: 1, name: "Pizza", price: 299, category: "food", emoji: "🍕", inStock: true },
    { id: 2, name: "Burger", price: 149, category: "food", emoji: "🍔", inStock: true },
    { id: 3, name: "Ice Cream", price: 99, category: "food", emoji: "🍨", inStock: false },

    // CLOTHES
    { id: 4, name: "T-Shirt", price: 499, category: "clothes", emoji: "👕", inStock: true },
    { id: 5, name: "Jeans", price: 1299, category: "clothes", emoji: "👖", inStock: false },
    { id: 6, name: "Jacket", price: 2499, category: "clothes", emoji: "🧥", inStock: true },

    // ELECTRONICS
    { id: 7, name: "Smartphone", price: 19999, category: "electronics", emoji: "📱", inStock: true },
    { id: 8, name: "Headphones", price: 1999, category: "electronics", emoji: "🎧", inStock: true },
    { id: 9, name: "Laptop", price: 59999, category: "electronics", emoji: "💻", inStock: false }
  ]);

  const toggleStock = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, inStock: !p.inStock } : p
    ));
  };

  const filteredProducts = products.filter(p =>
    (category === "all" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const countByCategory = (cat) =>
    products.filter(p => p.category === cat).length;

  return (
    <div className="container">
      <h1>🛍️ Product Catalog</h1>

      {/* SEARCH */}
      <input
        className="search"
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER BUTTONS */}
      <div className="filters">
        <button onClick={() => setCategory("all")}>All ({products.length})</button>
        <button onClick={() => setCategory("food")}>🍔 Food ({countByCategory("food")})</button>
        <button onClick={() => setCategory("clothes")}>👕 Clothes ({countByCategory("clothes")})</button>
        <button onClick={() => setCategory("electronics")}>📱 Electronics ({countByCategory("electronics")})</button>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            toggleStock={toggleStock}
          />
        ))}
      </div>
    </div>
  );
}

root.render(<App />);
