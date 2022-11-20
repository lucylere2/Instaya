import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Registrarse from './assets/Componentes/Registrarse'
import Solicitudrecogida from './assets/Componentes/Solicitudenvio'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Solicitudenvio from './assets/Componentes/Solicitudenvio'
import Servicios from './assets/Componentes/Servicios'
import QuienesSomos from './assets/Componentes/QuienesSomos'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './assets/Componentes/Footer'
import React from 'react'
import './assets/Componentes/Footer.css';


function App() {
  
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/quienesSomos">Quienes Somos </Link>
          </li>
          <li>
            <Link to="/servicios">Servicios </Link>
          </li>
          <li>
            <Link to="/registrarse">Registrarse </Link>
          </li>
          <li>
            <Link to="/solicitudenvio">Solicitar Envio</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>}/>
        <Route path='/registrarse' element={<Registrarse/>}/>
        <Route path='/solicitudenvio' element={<Solicitudenvio/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/quienessomos' element={<QuienesSomos/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
      <Footer> 

      </Footer>
    </BrowserRouter>    
  )
}

export default App
