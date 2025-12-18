import { useCart } from "./CartContext";
import "./cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <p className="empty-cart">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <div className="item-quantity">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="item-price">
              <p>₹{item.price * item.quantity}</p>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <div className="summary-row">
          <span>Total Items:</span>
          <span>
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </div>
        <div className="summary-row">
          <span>Total Price:</span>
          <span>₹{getTotalPrice()}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
