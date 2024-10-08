import React from "react";
import Navegacion from "../../componentes/componentes/navegacion"; // Importa el componente correctamente
import "../../componentes/css/Login.css";
import { Link } from "react-router-dom";


const RegistrarProve = () => {
  return (
    <div>
        <Navegacion>
            <div className="card card-success">
                <div className="card-body colorFondo">
                    <div className="card card-success">
                        <div className="card-header">
                            <h3 className="card-title">Registrar proveedor</h3>
                        </div>
                        <form>
                            <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="NombreProveedor">Nombre de proveedor</label>
                                <input type="text" className="form-control" id="NombreProveedor" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="NumeroProveedor">Numero de documento</label>
                                <input type="Number" min={"0"} className="form-control" id="NumeroProveedor" required />
                            </div>
                            <div class="form-group">
                                <label for="TipoProveedor">Tipo de documento</label>
                                <select class="custom-select form-control-border border-width-2" id="TipoProveedor">
                                    <option>Cedula</option>
                                    <option>Cedula de extranjeria</option>
                                    <option>Tarjeta de identidad</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="TelefonoProveedor">Telefono</label>
                                <input type="Number" min={"0"} className="form-control" id="TelefonoProveedor" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="EmailProveedor">Email</label>
                                <input type="Email"  className="form-control" id="EmailProveedor" required />
                            </div>
                            </div>
                            <div className="card-footer">
                            <Link to="/ConsultarProve" className="btn btn-primary custom-button mr-2">Volver</Link>
                            <button type="submit" className="btn btn-primary custom-button">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Navegacion>
    </div>
  );
}

export default RegistrarProve;

