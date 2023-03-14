import './App.css';
import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import Contenido from './componentes/Contenido/Contenido';


function App() {
  return (
    <div className="App">


      <Navbar />
      <Contenido />
      <Footer />

    </div>
  );
}

export default App;



