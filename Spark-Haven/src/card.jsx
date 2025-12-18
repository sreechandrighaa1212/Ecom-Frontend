import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./card.css";

const Card = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <div className="card-buttons">
        <Link to={`/products/${product.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
        <button className="cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
