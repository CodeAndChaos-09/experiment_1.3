function ProductCard({ name, price, inStock, emoji, category }) {
  return (
    <div className={`card ${category}`}>
      <div className="emoji">{emoji}</div>

      <h3>{name}</h3>
      <p className="price">₹{price}</p>

      <p className={inStock ? "stock in" : "stock out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}
