import React from 'react';
import g1 from '../../IMG/g1.jpg';
import maracas from '../../IMG/maracas.jpg';
import flauta2 from '../../IMG/flauta2.jpg';
import piano3 from '../../IMG/piano3.jpg';
import baj from '../../IMG/baj.png';
import guit from '../../IMG/guit.png';
import orga from '../../IMG/orga.png';
import timba from '../../IMG/timba.png';
import './Productos.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Productos = () => {
  return (
    
    <div className="productos-container">
      <Navbar />
      {productos.map((producto) => (
        <div key={producto.nombre} className="producto">
          <img src={producto.imagen} alt={producto.nombre} />
          <p>
            {producto.nombre} - {producto.precio}
          </p>
        </div>
      ))}
    </div>
  );
};




const productos = [
  {
    nombre: 'Guitarra Fender',
    imagen: g1,
    precio: '$150',
    
  },
  {
    nombre: 'Maracas',
    imagen: maracas,
    precio: '$15',
  },
  {
    nombre: 'Flauta Jupiter',
    imagen: flauta2,
    precio: '$90',
  },
  {
    nombre: 'Piano',
    imagen: piano3,
    precio: '$1500',
  },
  {
    nombre: 'Bajo',
    imagen: baj,
    precio: '$130',
  },
  {
    nombre: 'Guitarra 2',
    imagen: guit,
    precio: '$180',
  },
  {
    nombre: 'Organeta',
    imagen: orga,
    precio: '$250',
  },
  {
    nombre: 'Timbales',
    imagen: timba,
    precio: '$168',
  },
];




export default Productos;