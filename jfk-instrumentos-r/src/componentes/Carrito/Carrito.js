import React, { useState } from "react";
import "./Carrito.css";

function ShoppingCart() {
  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const getTotalPrice = () => {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    alert(`El precio total es: $${totalPrice}`);
  };

  return (
    <div className="shopping-cart">
      <h1>Carrito de Compras</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            {item.name} - {item.quantity}
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, { id: 1, name: "Product 1", quantity: 1, price: 40, image: "https://example.com/product1.jpg" }])}>
        <img src="/src/IMG/g1.jpg" alt="Product 1" /> Add Product 1
      </button>
      <button onClick={() => setItems([...items, { id: 2, name: "Product 2", quantity: 1, price: 60, image: "https://example.com/product2.jpg" }])}>
        <img src="/src/IMG/g5.jpg" alt="Product 2" /> Add Product 2
      </button>
      <button onClick={getTotalPrice}>Total</button>
    </div>
  );
}

export default ShoppingCart;







