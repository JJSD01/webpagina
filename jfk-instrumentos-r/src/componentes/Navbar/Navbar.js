import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {

    return <div>

        <div className="Navbar">
            <h1>JFK INSTRUMENTOS</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Menú</Link>
                    </li>
                    <li>
                        <Link to="/productos">Listas de Productos</Link>
                    </li>
                    <li>
                        <Link to="/carrito">Carrito de Compras</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Centro de Contacto</Link>
                    </li>
                    <li>
                        <Link to="/login">Inicio de Sesión</Link>
                    </li>

                </ul>
            </nav>
            <Outlet />


        </div>
    </div>;
}

export default Navbar;