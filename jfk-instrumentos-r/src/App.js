import './App.css';
import Contenido from './componentes/Contenido/Contenido';
import { Routes, Route } from 'react-router-dom';
import Carrito from './componentes/Carrito/Carrito';
import Login from './componentes/Login/Login';



function App() {
  return (

    <>
      <div>

        <Routes>
          <Route path='/' element={<Contenido />}> </Route>
            <Route path='carrito' element={<Carrito />} />
            <Route path='login' element={<Login />} />
          

        </Routes>



      </div>

    </>
  );
}

export default App;



