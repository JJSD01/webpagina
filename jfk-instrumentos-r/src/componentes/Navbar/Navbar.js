import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className="Navbar">   
       <h1>JFK INSTRUMENTOS</h1>
    <nav>
        <ul>
            <li><a href="">Menú</a></li>
            <li><a href="">Listas de Productos</a></li>
            <li><a href="productos.html">Carrito de Compras</a></li>
            <li><a href="">Centro de Contacto</a></li>
            <li><a href="">Inicio de Sesión</a></li>

        </ul>
    </nav>

    </div>  

        );

        
    }
}
 
export default Navbar;