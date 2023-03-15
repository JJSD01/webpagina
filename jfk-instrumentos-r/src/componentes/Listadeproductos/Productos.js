import React from 'react';
import g1 from '../../IMG/g1.jpg';
import maracas from '../../IMG/maracas.jpg';
import flauta2 from '../../IMG/flauta2.jpg';
import piano3 from '../../IMG/piano3.jpg';
import baj from '../../IMG/baj.png';
import guit from '../../IMG/guit.png';
import orga from '../../IMG/orga.png';
import timba from '../../IMG/timba.png';


const productos = [
  {
    nombre: 'Producto 1',
    imagen:  g1,
    precio: '$10'
  },
  {
    nombre: 'Producto 2',
    imagen:  maracas,
    precio: '$15'
  },
  {
    nombre: 'Producto 3',
    imagen: flauta2,
    precio: '$20'
  },
  {
    nombre: 'Producto 4',
    imagen:  piano3,
    precio: '$15'
  },
  {
    nombre: 'Producto 5',
    imagen:  baj,
    precio: '$15'
  },{
    nombre: 'Producto 6',
    imagen:  guit,
    precio: '$15'
  },
  {
    nombre: 'Producto 7',
    imagen: orga,
    precio: '$15'
  },
  {
    nombre: 'Producto 8',
    imagen:  timba,
    precio: '$15'
  },
  
];

const Productos = () => {
  return (
    <div  className="productos-container">
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <div key={producto.nombre} className="producto">
          <img src={producto.imagen} alt={producto.nombre} />
          <p>{producto.nombre} - {producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
