import React, { Component } from 'react';
import Bateria from '../../IMG/Bateria.jpg';
import Guitarra from '../../IMG/Guitarra.jpg';
import Flauta1 from '../../IMG/Flauta1.jpg';
import Piano1 from '../../IMG/Piano1.jpg';
import Clases from '../../IMG/Clases.svg';
import Tienda from '../../IMG/Tienda.svg';
import Mantenimiento from '../../IMG/Mantenimiento.svg';
import blog1 from '../../IMG/blog1.jpg';
import blog2 from '../../IMG/blog2.jpg';
import blog3 from '../../IMG/blog3.jpg';
import musica from '../../IMG/musica.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contenido.css';




class Contenido extends Component {
    state = {}
    render() {
        return (
            <div className="Contenido">
                <Navbar />
                <div className='contenedor-body container'>
                    <br /><br /><h2>"EN JFK Encuentra la clave de tu sonido en nuestra tienda de instrumentos musicales".</h2>
                    <p>¡Bienvenido a la tienda de instrumentos musicales más emocionante de la ciudad! Aquí encontrarás todo lo que necesitas para llevar tu música al siguiente nivel. Desde guitarras eléctricas y baterías de alta calidad hasta teclados, violines y todo tipo de accesorios musicales, tenemos todo lo que un músico pueda desear.

                        Nuestro personal amable y experto está siempre dispuesto a ayudarte a encontrar el instrumento perfecto para tus necesidades y presupuesto. Ya seas un principiante que busca su primer instrumento o un músico experimentado en busca de una actualización, estamos aquí para ayudarte a encontrar exactamente lo que necesitas.

                        Además, ofrecemos clases de música y talleres impartidos por músicos experimentados para ayudarte a desarrollar tus habilidades y mejorar tu técnica. Y para aquellos que prefieren comprar en línea, tenemos una tienda en línea completa con envío rápido y seguro a cualquier parte del país.

                        ¡Así que no lo dudes más y ven a visitarnos hoy! Estamos ansiosos por ayudarte a descubrir tu pasión por la música y equiparte con los mejores instrumentos y accesorios.</p>
                    <a href="#" className='btn-1'>informacion</a>
                </div>
                <section className='instrumentos'>
                    <div className='imag'>
                        <img src={musica} alt="" />
                    </div>

                    <div className='contenedor-instrumentos container'>

                        <h2>Tipos de Instrumentos Musicales</h2>
                        <p className='txt-p"'>Existen muchos tipos de instrumentos musicales, pero los principales se pueden clasificar en cuatro categorías: instrumentos de cuerda, viento, percusión y teclado.</p>

                        <div className='grupo-instrumentos'>

                            <div className='instrumentos-1'>
                                <div className='imagen0'>
                                    <img src={Bateria} alt="" />
                                </div>
                                <h3>Percusion</h3>
                                <p>
                                    Los instrumentos de percusión producen sonidos mediante la vibración de superficies sólidas o membranas tensadas. Ejemplos de estos son la batería, el tambor, la marimba y el xilófono.
                                </p>
                            </div>

                            <div className='instrumentos-1'>
                                <div className='imagen2'>
                                    <img src={Guitarra} alt="" />
                                </div>
                                <h3>Cuerda</h3>
                                <p>
                                    Los instrumentos de cuerda producen sonidos mediante la vibración de cuerdas tensadas. Ejemplos de estos son la guitarra, el violín, el violonchelo y el bajo.
                                </p>
                            </div>

                            <div className='instrumentos-1'>
                                <div className='imagen3'>
                                    <img src={Flauta1} alt="" />
                                </div>
                                <h3>Viento</h3>
                                <p>
                                    Los instrumentos de viento producen sonidos mediante la vibración de una columna de aire dentro del instrumento. Ejemplos de estos son la flauta, el saxofón, la trompeta y el clarinete.
                                </p>
                            </div>

                            <div className='instrumentos-1'>
                                <div className='imagen4'>
                                    <img src={Piano1} alt="" />
                                </div>
                                <h3>Teclado</h3>
                                <p>
                                    Los instrumentos de teclado producen sonidos al pulsar teclas que accionan mecanismos que generan vibraciones en las cuerdas o en las columnas de aire. Ejemplos de estos son el piano, el órgano, el sintetizador y el clavecín.
                                </p>
                            </div>

                        </div>
                        <a href="#" className='btn-1'>informacion</a>
                    </div>
                </section >

                <main class="servicios">

                    <div className='contenedor-servicios container'>
                        <h2>Servicios Tienda JFK</h2>
                        <div className='grupo-servicios'>
                            <div className='servicio-1'>
                                <div className='imagen5'>
                                    <img src={Clases} alt="" />
                                </div>
                                <h3>Clases Personalizadas</h3>
                            </div>
                            <div className='servicio-1'>
                                <div className='imagen6'>
                                    <img src={Tienda} alt="" />
                                </div>
                                <h3>Venta de Accesorios</h3>
                            </div>
                            <div className='servicio-1'>
                                <div className='imagen7'>
                                    <img src={Mantenimiento} alt="" />
                                </div>
                                <h3>Reparacion y Mantenimiento</h3>
                            </div>

                        </div>
                        <p>¡Mantén tus instrumentos musicales en su mejor estado con nuestro servicio de mantenimiento profesional! Ofrecemos servicios de limpieza, ajuste y reparación para todo tipo de instrumentos, incluyendo guitarras, bajos, baterías, teclados, instrumentos de viento y más.

                            Nuestros técnicos altamente capacitados tienen años de experiencia en el mantenimiento de instrumentos y utilizan solo herramientas y materiales de alta calidad para garantizar los mejores resultados. Ya sea que necesites una simple limpieza o una reparación más compleja, podemos ayudarte a que tu instrumento suene y funcione como nuevo.</p>
                        <a href="#" className='btn-1'>informacion</a>
                    </div>

                </main>


                <section className='general'>

                    <div className='general-1'>
                        <h2>algunos datos importantes sobre las guitarras:</h2>
                        <p>* Las guitarras se clasifican en dos categorías principales: guitarras acústicas y guitarras eléctricas. Las guitarras acústicas son instrumentos que producen sonido a través de la resonancia de su caja de resonancia, mientras que las guitarras eléctricas producen sonido a través de su sistema de pastillas y amplificación.<br /><br />
                            * La guitarra acústica más común tiene seis cuerdas. Las guitarras eléctricas pueden tener seis, siete u ocho cuerdas.<br /><br />
                            * Las guitarras se construyen con diferentes tipos de madera, que afectan su sonido y apariencia. Algunas maderas comunes incluyen el arce, el caoba, el palisandro y el cedro.<br /><br />
                            * Las guitarras pueden tener diferentes tipos de cuerda, que también afectan su sonido y sensación al tocar. Las cuerdas de acero son comunes en guitarras acústicas, mientras<br /><br />
                        </p>
                        <a href="#" className='btn-1'>informacion</a>
                    </div>
                    <div className='general-2'></div>
                </section>

                <section className='general'>
                    <div className='general-3'></div>
                    <div className='general-1'>
                        <h2>algunos datos importantes sobre los instrumentos de percusión:</h2>
                        <p>* Los instrumentos de percusión pueden ser de percusión afinada o de percusión no afinada. Los instrumentos de percusión afinada, como el xilófono y el marimba, producen notas musicales específicas, mientras que los instrumentos de percusión no afinada, como los tambores y los platillos, no producen notas específicas.<br /><br />
                            * Los tambores son instrumentos de percusión muy populares y se utilizan en una amplia variedad de géneros musicales. Algunos ejemplos de tambores incluyen el tambor bajo, la caja, el tom-tom y el conga.<br /><br />
                            * Los platillos son otro tipo común de instrumento de percusión y se utilizan para crear efectos sonoros dramáticos. Los platillos pueden ser suspendidos o colocados en soportes.<br /><br />
                            * Los instrumentos de percusión a menudo se utilizan en grupos, como bandas y orquestas, y pueden ser una parte esencial de la música de baile.
                        </p>
                        <a href="#" className='btn-1'>informacion</a>

                    </div>
                </section>

                <section className='blog container'>

                    <h2>BLOG</h2>

                    <p>La música es una parte esencial de la vida de muchas personas, y los instrumentos musicales son herramientas indispensables para crearla. En este blog, exploraremos diferentes tipos de instrumentos, desde guitarras hasta tambores, y compartiremos consejos útiles para ayudarte a elegir el instrumento adecuado, cuidarlo y mejorar tu técnica. También hablaremos sobre la historia y la evolución de los instrumentos musicales y cómo han influido en la música que escuchamos hoy en día. Si eres un músico experimentado o simplemente estás empezando a explorar la música, este es el lugar perfecto para aprender y descubrir más sobre los instrumentos musicales.</p>


                    <div className='contenido-blog'>
                        <div className='blog-1'>
                            <div className='imagen8'>
                                <img src={blog1} alt="" />
                            </div>

                            <h3>Blog 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis quas officia nobis autem,
                                earum
                                molestiae repellendus necessitatibus accusamus enim? Iure, nihil nam quas non adipisci quisquam
                                repudiandae magnam quis!
                            </p>
                        </div>
                        <div className='blog-1'>
                            <div className='imagen9'>
                                <img src={blog2} alt="" />
                            </div>

                            <h3>Blog 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis quas officia nobis autem,
                                earum
                                molestiae repellendus necessitatibus accusamus enim? Iure, nihil nam quas non adipisci quisquam
                                repudiandae magnam quis!
                            </p>
                        </div>
                        <div className='blog-1'>
                            <div className='imagen10'>
                                <img src={blog3} alt="" />
                            </div>

                            <h3>Blog 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis quas officia nobis autem,
                                earum
                                molestiae repellendus necessitatibus accusamus enim? Iure, nihil nam quas non adipisci quisquam
                                repudiandae magnam quis!
                            </p>
                        </div>
                    </div>

                    <a href="#" className='btn-1'>informacion</a>

                </section>



                <Footer />




            </div >
        );
    }
}

export default Contenido;