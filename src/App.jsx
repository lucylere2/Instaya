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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Header from './assets/Componentes/Header'

function App() {
  
  return (
    <BrowserRouter>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to='/quienessomos'>Quienes </Nav.Link>
            <Nav.Link as={Link} to='/servicios'>Servicios</Nav.Link>
            <Nav.Link as={Link} to='/registrarse'>Registrarse</Nav.Link>
            <Nav.Link as={Link} to='/solicitudenvio'>Solicitud de Envio</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
      <Routes>
        <Route path='/' element={<h1> </h1>}/>
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
