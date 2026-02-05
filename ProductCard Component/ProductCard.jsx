function ProductCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p className="price">₹{props.price}</p>

      <p
        className={
          props.inStock ? "stock in-stock" : "stock out-of-stock"
        }
      >
        {props.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}
