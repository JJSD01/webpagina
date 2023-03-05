import K from './IMG/K.png';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
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
    <footer>
        <div class="container_footer">
            <div class="box_footer">
                <div class="logo">
                <img src={K} alt=""/> 
                </div>
                <div class="terminos">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, nostrum. Numquam error sunt hic, architecto fugiat repellendus sint vel itaque deleniti nostrum harum quaerat magnam suscipit tempora ad ratione expedita.</p>
    
                </div>
            </div> 

            <div class="box_footer">
                <h2>Quienes Somos</h2>
                <a href="#">Vision</a>
                <a href="#">Mision</a>
                <a href="#">Lo que Hacemos</a>
                <a href="#">Trabaja con Nosotros</a>
            </div>


            <div class="box_footer">
                <h2>Medios de Pago</h2>
                <a href="#"><i class="fa-solid fa-dollar-sign"></i> Efectivo</a>
                <a href="#"><i class="fa-brands fa-cc-visa"></i> Visa</a>
                <a href="#"><i class="fa-brands fa-paypal"></i> Paypal</a>
                <a href="#"><i class="fa-solid fa-paper-plane"></i> Pago Contra Entrega</a>
            </div>

            <div class="box_footer">
                <h2>Contactenos</h2>
                <a href="https://api.whatsapp.com/send/?phone=573187999825&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i> 3187999825</a>
                <a href="#"><i class="fa-sharp fa-solid fa-phone"></i> 6014895874</a>
                <a href="https://accounts.google.com/"><i class="fa-solid fa-envelope"></i> jfk@gmail.com</a>
                <a href="#"><i class="fa-solid fa-map-location-dot"></i> Cra. 15 #78-33</a>
            </div>


            <div class="box_footer">
                <h2>Redes Sociales</h2>
                <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i> Facebook</a>
                <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i> Instagram</a>
                <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i> Twitter</a>
                <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i> Youtube</a>
            </div>


        </div>
        <div class="box_copyright">
            <hr/> 
            <p>Todos los derechos reservados ®2023
                <b>Instrumentos JFK</b>
            </p>

        </div>
        
       

    </footer>
    </div>
  );
}

export default App;



