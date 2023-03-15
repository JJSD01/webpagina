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
      <header>
        <h1>JFK Carrito de Compras</h1>
      </header>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            {item.name} - {item.quantity}
            <button onClick={() => removeItemByIndex(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, { id: 1, name: "Guitarra Yamaha", quantity: 1, price: 350000, image: "./IMG/g1.jpg" }])}>
        <img src="./IMG/g1.jpg" alt="Guitarra" /> Agragar Producto 
      </button>
      <button onClick={() => setItems([...items, { id: 1, name: "Piano Bechstein", quantity: 1, price: 580000, image: "./IMG/g5.jpg" }])}>
        <img src="./IMG/g5.jpg" alt="Piano" /> Agragar Producto
      </button>
      <button onClick={() => setItems([...items, { id: 1, name: "Flauta Jupiter", quantity: 1, price: 680000, image: "./IMG/g1.jpg" }])}>
        <img src="./IMG/g1.jpg" alt="Flauta" /> Agragar Producto 
      </button>
      <button onClick={() => setItems([...items, { id: 1, name: "Bateria Bosh", quantity: 1, price: 97000, image: "./IMG/g5.jpg" }])}>
        <img src="./IMG/g5.jpg" alt="Bateria" /> Agragar Producto 
      </button>

      
      <button onClick={getTotalPrice}>Total</button>
    </div>
  );
}

export default ShoppingCart;










