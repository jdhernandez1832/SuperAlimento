import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/auth/Login';
import Index from './paginas/Index';
import Perfil from './paginas/Usuarios/Perfil';
import RegistrarUsu from './paginas/Usuarios/RegistrarUsu';
import RegistrarSoli from './paginas/Solicitud/RegistrarSoli';
import RegistrarCate from './paginas/Categoria/RegistrarCate';
import RegistrarProve from './paginas/Proveedor/RegistrarProve';
import RegistrarProd from './paginas/Producto/RegistrarProd';
import ConsultarUsu from './paginas/Usuarios/ConsultarUsu';
import ConsultarProd from './paginas/Producto/ConsultarProd';
import ConsultarProve from './paginas/Proveedor/ConsultarProve';
import ConsultarCate from './paginas/Categoria/ConsultarCate';
import ActualizarUsu from './paginas/Usuarios/ActualizarUsu';
import ActualizarProve from './paginas/Proveedor/ActualizarProve';
import ActualizarCate from './paginas/Categoria/ActualizarCate';
import ActualizarProd from './paginas/Producto/ActualizarProd';
import ActualizarSoli from './paginas/Solicitud/ActualizarSoli';
import ConsultarSoli from './paginas/Solicitud/ConsultarSoli';
import AceptarSoli from './paginas/Solicitud/AceptarSoli';
import RegistrarVent from './paginas/Ventas/RegistrarVent';
import AgregarProd from './paginas/Ventas/AgregarProd';
import ConsultarVent from './paginas/Ventas/ConsultarVent';
import ActualizarVent from './paginas/Ventas/ActualizarVent';
import ActualizarAgre from './paginas/Ventas/ActualizarAgre';
import Contacto from './paginas/Contacto';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}/>
          <Route path="/Index" element={<Index />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path='/RegistrarUsu' element={<RegistrarUsu/>}/>
          <Route path='/RegistrarSoli' element={<RegistrarSoli/>}/>
          <Route path='/RegistrarCate' element={<RegistrarCate/>}/>
          <Route path='/RegistrarProve' element={<RegistrarProve/>}/>
          <Route path='/RegistrarProd' element={<RegistrarProd/>}/>
          <Route path='/RegistrarVent' element={<RegistrarVent/>}/>
          <Route path='/ConsultarUsu' element={<ConsultarUsu/>}/>
          <Route path='/ConsultarProd' element={<ConsultarProd/>}/>
          <Route path='/ConsultarProve' element={<ConsultarProve/>}/>
          <Route path='/ConsultarSoli' element={<ConsultarSoli/>}/>
          <Route path='/ConsultarCate' element={<ConsultarCate/>}/>
          <Route path='/ConsultarVent' element={<ConsultarVent/>}/>
          <Route path='/ActualizarUsu' element={<ActualizarUsu/>}/>
          <Route path='/ActualizarProve' element={<ActualizarProve/>}/>
          <Route path='/ActualizarCate' element={<ActualizarCate/>}/>
          <Route path='/ActualizarProd' element={<ActualizarProd/>}/>
          <Route path='/ActualizarSoli' element={<ActualizarSoli/>}/>
          <Route path='/ActualizarVent' element={<ActualizarVent/>}/>
          <Route path='/ActualizarAgre' element={<ActualizarAgre/>}/>
          <Route path='/AceptarSoli' element={<AceptarSoli/>}/>
          <Route path='/AgregarProd' element={<AgregarProd/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
    </Fragment>
  );  
}

export default App;
