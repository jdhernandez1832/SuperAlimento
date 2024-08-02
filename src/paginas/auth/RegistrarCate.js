import React, { Fragment } from "react";
import Navegacion from "../../componentes/componentes/navegacion"; // Importa el componente correctamente
import "../../componentes/css/Login.css";
import { Link } from "react-router-dom";


const RegistrarCate = () => {
  return (
    <div>
        <Navegacion>
            <div className="card card-success">
                <div className="card-body colorFondo">
                    <div className="card card-success">
                        <div className="card-header">
                            <h3 className="card-title">Registrar categoria</h3>
                        </div>
                        <form>
                            <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="NombreCategoria">Nombre de la categoria</label>
                                <input type="text" className="form-control" id="NombreCategoria" required />
                            </div>
                            </div>
                            <div className="card-footer">
                            <Link to="/ConsultarCate" className="btn btn-primary custom-button mr-2">Volver</Link>
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

export default RegistrarCate;