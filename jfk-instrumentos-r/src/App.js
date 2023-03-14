import './App.css';
import Contenido from './componentes/Contenido/Contenido';
import { Routes, Route } from 'react-router-dom';
import Carrito from './componentes/Carrito/Carrito';
import Login from './componentes/Login/Login';
import ListadeProductos from './componentes/Listadeproductos/Productos'


function App() {
  return (

    <>
      <div>

        <Routes>
          <Route path='/' element={<Contenido />}> </Route>
            <Route path='carrito' element={<Carrito />} />
            <Route path='login' element={<Login />} />
            <Route path='listadeproductos' element={<ListadeProductos />} />
          

        </Routes>



      </div>

    </>
  );
}

export default App;



