const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div className="container">
      <h1>Product Catalog</h1>

      <ProductCard
        name="Wireless Mouse"
        price="799"
        inStock={true}
      />

      <ProductCard
        name="Mechanical Keyboard"
        price="2499"
        inStock={false}
      />

      <ProductCard
        name="USB-C Hub"
        price="1299"
        inStock={true}
      />
    </div>
  );
}

root.render(<App />);
