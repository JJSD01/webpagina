import React, { Component } from 'react';
import  K from '../../IMG/K.png';
import './Footer.css';




class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className="Footer">  
    
    <footer>
        <div className='container_footer'>
            <div className='box_footer'>
                <div className='logo'>
                <img src={K} alt=""/> 
                </div>
                <div className='terminos'>
                    <p>♫ JFK Instrumentos Musicales Bogotá Colombia ♫
Experiencia, conocimiento y asesoría especializada son nuestras políticas comerciales, acompañadas de Honestidad, eficiencia y responsabilidad. Que dan como resultado una empresa dinámica, con alto sentido de pertenencia  y sobre todo gran compromiso con los clientes y sus necesidades.</p>
    
                </div>
            </div> 

            <div className='box_footer'>
                <h2>Quienes Somos</h2>
                <a href="#">Vision</a>
                <a href="#">Mision</a>
                <a href="#">Lo que Hacemos</a>
                <a href="#">Trabaja con Nosotros</a>
            </div>


            <div className='box_footer'>
                <h2>Medios de Pago</h2>
                <a href="#"><i class="fa-solid fa-dollar-sign"></i> Efectivo</a>
                <a href="https://www.visa.com.co/"><i class="fa-brands fa-cc-visa"></i> Visa</a>
                <a href="https://www.paypal.com/co/home"><i class="fa-brands fa-paypal"></i> Paypal</a>
                <a href="https://encolombia.com/economia/empresas/logistica/pago-contra-entrega/"><i class="fa-solid fa-paper-plane"></i> Pago Contra Entrega</a>
            </div>

            <div className='box_footer'>
                <h2>Contactenos</h2>
                <a href="https://api.whatsapp.com/send/?phone=573187999825&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i> 3187999825</a>
                <a href="#"><i class="fa-sharp fa-solid fa-phone"></i> 6014895874</a>
                <a href="https://accounts.google.com/"><i class="fa-solid fa-envelope"></i> jfk@gmail.com</a>
                <a href="https://goo.gl/maps/fBydmutqQSyKMpS89"><i class="fa-solid fa-map-location-dot"></i> Cra. 15 #78-33</a>
            </div>


            <div className='box_footer'>
                <h2>Redes Sociales</h2>
                <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i> Facebook</a>
                <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i> Instagram</a>
                <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i> Twitter</a>
                <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i> Youtube</a>
            </div>


        </div>
        <div className='box_copyright'>
            <hr/> 
            <p>Todos los derechos reservados ®2023
                <b>Instrumentos JFK</b>
            </p>

        </div>
        
       

    </footer>
    </div>




        );
    }
}
 
export default Footer;