const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div className="container">
      <h1>🛍️ Product Catalog</h1>

      {/* FOOD CATEGORY */}
      <h2 className="category-title food-title">🍔 Food</h2>
      <div className="grid">
        <ProductCard name="Pizza" price="299" inStock={true} emoji="🍕" category="food" />
        <ProductCard name="Burger" price="149" inStock={true} emoji="🍔" category="food" />
        <ProductCard name="Ice Cream" price="99" inStock={false} emoji="🍨" category="food" />
      </div>

      {/* CLOTHES CATEGORY */}
      <h2 className="category-title clothes-title">👕 Clothes</h2>
      <div className="grid">
        <ProductCard name="T-Shirt" price="499" inStock={true} emoji="👕" category="clothes" />
        <ProductCard name="Jeans" price="1299" inStock={false} emoji="👖" category="clothes" />
        <ProductCard name="Jacket" price="2499" inStock={true} emoji="🧥" category="clothes" />
      </div>

      {/* ELECTRONICS CATEGORY */}
      <h2 className="category-title electronics-title">📱 Electronics</h2>
      <div className="grid">
        <ProductCard name="Smartphone" price="19999" inStock={true} emoji="📱" category="electronics" />
        <ProductCard name="Headphones" price="1999" inStock={true} emoji="🎧" category="electronics" />
        <ProductCard name="Laptop" price="59999" inStock={false} emoji="💻" category="electronics" />
      </div>
    </div>
  );
}

root.render(<App />);
