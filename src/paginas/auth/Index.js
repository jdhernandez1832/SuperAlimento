import React, { Fragment } from "react";
import Navegacion from "../../componentes/componentes/navegacion"; // Importa el componente correctamente
import "../../componentes/css/Login.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
        <Navegacion>
            <div className="card card-success">
            <div className="card-body">
                <h1 className="text-center">Bienvenido Administrador</h1>
            </div>
            </div>
            <div className="card card-success">
                <div className="card-body colorFondo">
                    <div className="row">
                    <div className="col-md-12 col-lg-6 col-xl-4">
                        <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top tamañoImagen" src="../dist/img/FotoNegocio2.jpeg" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <p className="card-text pb-2 pt-1 caja">Precione aqui para ir a consultar los productos en el inventario</p>
                            <Link to="/ConsultarProd" className="btn btn-primary custom-button mr-2">Productos</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-4">
                        <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top tamañoImagen" src="../dist/img/Caja.png" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <p className="card-text pb-2 pt-1 caja">Precione aqui para ir a consultar de los usuarios del sistema</p>
                            <Link to="/ConsultarUsu" className="btn btn-primary custom-button mr-2">Usuarios</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-4">
                        <div className="card mb-2 bg-gradient-dark">
                        <img className="card-img-top tamañoImagen" src="../dist/img/FotoNegocio1.jpeg" alt="Dist Photo 1" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <p className="card-text pb-2 pt-1 caja">Precione aqui para ir a consultar las ventas en el sistma</p>
                            <Link to="/ConsultarVent" className="btn btn-primary custom-button mr-2">Ventas</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Navegacion>
    </div>
  );
}

export default Index;

