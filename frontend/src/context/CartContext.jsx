import React, { createContext, useState } from "react";

// Creación del contexto
const CartContext = createContext();

// Proveedor del contexto
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(pizza =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(pizza =>
      pizza.id === id ? { ...pizza, count: pizza.count > 1 ? pizza.count - 1 : 1 } : pizza
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(pizza => pizza.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Exportar por defecto
export default CartContext;
export { CartProvider };
