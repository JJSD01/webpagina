import React, { Component } from 'react';

class Login extends Component {
    state = {}
    render() {
        return (
            <div>

                <body>


                    <div className="formulario">
                        <h2>Inicio sesion</h2>
                        <form method='post'>
                            <div className="username">
                                <input type="text" required />
                                <label>Nombre de Usuario</label>
                            </div>
                            <div className="clave">
                                <input type="passwrod" required />
                                <label>Contraseña</label>
                            </div>
                            <div className="recuperar">¿Olvido su Contraseña?</div>
                            <input type="Submit" value="Iniciar" />
                            <div className="registrarse">
                                Quiero <a href='#'>Registrarme</a>
                            </div>



                        </form>



                    </div>

                </body>

            </div>

        );
    }
}

export default Login;