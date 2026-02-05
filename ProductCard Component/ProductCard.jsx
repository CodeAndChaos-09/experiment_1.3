function ProductCard({ product, toggleStock }) {
  return (
    <div
      className={`card ${product.category}`}
      onClick={() => toggleStock(product.id)}
      title="Click to toggle stock"
    >
      <div className="emoji">{product.emoji}</div>

      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <span className={`badge ${product.inStock ? "in" : "out"}`}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}
