import React, { Component } from 'react';
import fender from './IMG/fender.png';
import './Body.css';


class Body extends Component {
    state = {}
    render() {
        return (
            <div className="Body">


                <body>

                    <div className='contenido'>
                        <div className='articulos'>
                            <div className='secciones'>
                                <div>
                                    <h2>Fender</h2>
                                    <p>Una opción perfecta para los principiantes, el nuevo Strat® Pack de Squier® tiene todo lo necesario para empezar a tocar, la Stratocaster de escala corta (24″) es ideal para músicos con manos más pequeñas y proporciona una sensación más cómoda. Otras características incluyen un cuerpo ligero de peso, un puente fijo para una afinación más estable y tres pastillas de una sola bobina para el tono Strat clásico.</p>
                                    <div className='imagen1'>
                                        <img src={fender} alt="" />
                                    </div>




                                </div>

                            </div>

                        </div>



                    </div>





                </body>

            </div>



        );
    }
}

export default Body;