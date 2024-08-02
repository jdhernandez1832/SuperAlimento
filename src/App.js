import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/auth/Login';
import Index from './paginas/auth/Index';
import Perfil from './paginas/auth/Perfil';
import RegistrarUsu from './paginas/auth/RegistrarUsu';
import RegistrarSoli from './paginas/auth/RegistrarSoli';
import RegistrarCate from './paginas/auth/RegistrarCate';
import RegistrarProve from './paginas/auth/RegistrarProve';
import RegistrarProd from './paginas/auth/RegistrarProd';
import ConsultarUsu from './paginas/auth/ConsultarUsu';
import ConsultarProd from './paginas/auth/ConsultarProd';
import ConsultarProve from './paginas/auth/ConsultarProve';
import ConsultarCate from './paginas/auth/ConsultarCate';
import ActualizarUsu from './paginas/auth/ActualizarUsu';
import ActualizarProve from './paginas/auth/ActualizarProve';
import ActualizarCate from './paginas/auth/ActualizarCate';
import ActualizarProd from './paginas/auth/ActualizarProd';
import ActualizarSoli from './paginas/auth/ActualizarSoli';
import ConsultarSoli from './paginas/auth/ConsultarSoli';
import AceptarSoli from './paginas/auth/AceptarSoli';
import RegistrarVent from './paginas/auth/RegistrarVent';
import AgregarProd from './paginas/auth/AgregarProd';
import ConsultarVent from './paginas/auth/ConsultarVent';
import ActualizarVent from './paginas/auth/ActualizarVent';
import ActualizarAgre from './paginas/auth/ActualizarAgre';
import Contacto from './paginas/auth/Contacto';

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
