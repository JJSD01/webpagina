import React, { useState } from "react";
import "./Carrito.css";

function ShoppingCart() {
  const [items, setItems] = useState([]);

  const removeItemByIndex = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  const removeItem = (id) => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      removeItemByIndex(index);
    }
  };

  const getTotalPrice = () => {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    alert(`El precio total es: $${totalPrice}`);
  };

  return (
    <div className="shopping-cart">
      <h1>Carrito de Compras</h1>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            {item.name} - {item.quantity}
            <button onClick={() => removeItemByIndex(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, { id: 1, name: "Guitarra Yamaha", quantity: 1, price: 350000, image: "/src/IMG/22.jpg" }])}>
        <img src="/src/IMG/g1.jpg" alt="Guitarra" /> Agragr Producto 1
      </button>
      <button onClick={() => setItems([...items, { id: 1, name: "Piano Bechstein", quantity: 1, price: 580000, image: "https://example.com/product2.jpg" }])}>
        <img src="/src/IMG/g5.jpg" alt="Piano" /> Agragar Producto 2
      </button>
      <button onClick={() => setItems([...items, { id: 1, name: "Flauta Jupiter", quantity: 1, price: 680000, image: "/src/IMG/22.jpg" }])}>
        <img src="/src/IMG/g1.jpg" alt="Flauta" /> Agragr Producto 1
      </button>
      <button onClick={() => setItems([...items, { id: 1, name: "Bateria Bosh", quantity: 1, price: 97000, image: "https://example.com/product2.jpg" }])}>
        <img src="/src/IMG/g5.jpg" alt="Bateria" /> Agragar Producto 2
      </button>
      
      <button onClick={getTotalPrice}>Total</button>
    </div>
  );
}

export default ShoppingCart;








