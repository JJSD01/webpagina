//UNIREMIGTON-DESARROLLO DE SOFTWARE 2
//INGENIERIA DE SISTEMAS 3 SEMESTRE
//PROYECTO PAGINA WEB DE VENTA DE INTRUMENTOS MUSICALES
//CREADA POR: JONATHAN SANCHEZ-FRANK MARTINEZ
//*Este proyecto se realiza con el fin de mostrar en la pagina web los diferentes requisitos que se nos piden en la unidad 1-2
//los cuales son entre otros crear la pagina web con diferentes tipos de letras, colores de fondo, imagenes con margen,
//definir la estructura de la pagina webcon (footer). Tambien se agragaron funcionalidades en index.js con sus respectivos codigos fuentes
//las cuales se muestran en la ventana carrito de compras.  -->



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './componentes/Navbar/Navbar';
import Body from './componentes/Body/Body';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <App />
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
