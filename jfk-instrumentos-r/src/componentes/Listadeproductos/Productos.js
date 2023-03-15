import React from 'react';
import a from '../../IMG/a.jpg';

const productos = [
  {
    nombre: 'Producto 1',
    imagen: a,
    precio: '$10'
  },
  {
    nombre: 'Producto 2',
    imagen: 'https://via.placeholder.com/150',
    precio: '$15'
  },
  {
    nombre: 'Producto 3',
    imagen: 'https://via.placeholder.com/150',
    precio: '$20'
  }
];

const Productos = () => {
  return (
    <div>
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <div key={producto.nombre}>
          <img src={producto.imagen} alt={producto.nombre} />
          <p>{producto.nombre} - {producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
