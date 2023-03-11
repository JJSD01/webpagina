import React, { Component } from 'react';
import Notas from '../../IMG/Notas.png';
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
import './Contenido.css';



class Contenido extends Component {
    state = {}
    render() {
        return (
            <div className="Contenido">
                <body>
                    <section className='instrumentos'>
                        <div className='imagen'>
                            <img src={Notas} alt="" />
                        </div>

                        <div className='contenedor-instrumentos container'>

                            <h2>Tipos de Instrumentos Musicales</h2>
                            <p className='txt-p"'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod consequatur, nostrum
                                ipsum aliquid eligendi consectetur id voluptas quae aspernatur, delectus dignissimos. Rerum earum
                                repellat molestiae soluta officiis distinctio reprehenderit!</p>

                            <div className='grupo-instrumentos'>

                                <div className='instrumentos-1'>
                                    <div className='imagen0'>
                                        <img src={Bateria} alt="" />
                                    </div>
                                    <h3>Percusion</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi nesciunt earum
                                        consequuntur cum suscipit, excepturi deserunt ea cupiditate commodi voluptatibus, tempore atque,
                                        sunt eveniet ipsum. Aliquid dolorum quasi neque?
                                    </p>
                                </div>

                                <div className='instrumentos-1'>
                                    <div className='imagen2'>
                                        <img src={Guitarra} alt="" />
                                    </div>
                                    <h3>Cuerda</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi nesciunt earum
                                        consequuntur cum suscipit, excepturi deserunt ea cupiditate commodi voluptatibus, tempore atque,
                                        sunt eveniet ipsum. Aliquid dolorum quasi neque?
                                    </p>
                                </div>

                                <div className='instrumentos-1'>
                                    <div className='imagen3'>
                                        <img src={Flauta1} alt="" />
                                    </div>
                                    <h3>Viento</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi nesciunt earum
                                        consequuntur cum suscipit, excepturi deserunt ea cupiditate commodi voluptatibus, tempore atque,
                                        sunt eveniet ipsum. Aliquid dolorum quasi neque?
                                    </p>
                                </div>

                                <div className='instrumentos-1'>
                                    <div className='imagen4'>
                                        <img src={Piano1} alt="" />
                                    </div>
                                    <h3>Teclado</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi nesciunt earum
                                        consequuntur cum suscipit, excepturi deserunt ea cupiditate commodi voluptatibus, tempore atque,
                                        sunt eveniet ipsum. Aliquid dolorum quasi neque?
                                    </p>
                                </div>

                            </div>
                            <a href="#" class="btn-1">informacion</a>
                        </div>
                    </section >

                    <main class="servicios">

                        <div className='contenedor-servicios container'>
                            <h2>Servicios Tienda JFK</h2>
                            <div className='grupo-servicios"'>
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
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, blanditiis! Libero quasi placeat
                                excepturi sequi deleniti voluptates doloribus tempore minus, ipsa eum iusto ex vero dolorum,
                                aperiam, quisquam nam sit!</p>
                            <a href="#" class="btn-1">informacion</a>

                        </div>

                    </main>


                    <section className='general'>

                        <div className='general-1'>
                            <h2>Datos importantes 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto numquam animi vitae ex. Ad, deserunt
                                similique delectus fuga voluptas magnam maxime obcaecati sit illo aperiam nihil fugit nisi corrupti!
                            </p>
                            <a href="#" class="btn-1">informacion</a>
                        </div>
                        <div className='general-2'></div>
                    </section>

                    <section className='general'>
                        <div className='general-3'></div>
                        <div className='general-1'>
                            <h2>Datos importantes 2</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto numquam animi vitae ex. Ad, deserunt
                                similique delectus fuga voluptas magnam maxime obcaecati sit illo aperiam nihil fugit nisi corrupti!
                            </p>
                            <a href="#" class="btn-1">informacion</a>

                        </div>
                    </section>

                    <section className='blog container'>

                        <h2>Blog</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet eum consequatur reprehenderit repellendus
                            vero ipsam blanditiis! Labore quasi cumque nesciunt. Reiciendis voluptas veniam voluptatum, veritatis optio
                            quas fugiat laudantium?</p>


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

                        <a href="#" class="btn-1">informacion</a>
                    </section>



                </body>



            </div >
        );
    }
}

export default Contenido;