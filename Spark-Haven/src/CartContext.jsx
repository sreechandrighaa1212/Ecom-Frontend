import { createContext, useState, useContext } from "react";

const CartContext = createContext();

// Helper functions
const addToCartHelper = (cartItems, product) => {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const removeFromCartHelper = (cartItems, productId) => {
  return cartItems.filter((item) => item.id !== productId);
};

const updateQuantityHelper = (cartItems, productId, quantity) => {
  if (quantity <= 0) {
    return removeFromCartHelper(cartItems, productId);
  } else {
    return cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
  }
};

const getTotalPriceHelper = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(addToCartHelper(cartItems, product));
  };

  const removeFromCart = (productId) => {
    setCartItems(removeFromCartHelper(cartItems, productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(updateQuantityHelper(cartItems, productId, quantity));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return getTotalPriceHelper(cartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
