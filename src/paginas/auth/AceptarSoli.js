import React, { Fragment } from "react";
import Navegacion from "../../componentes/componentes/navegacion"; // Importa el componente correctamente
import "../../componentes/css/Login.css";
import { Link } from "react-router-dom";


const AceptarSoli = () => {
  return (
    <div>
        <Navegacion>
            <div className="card card-success">
                <div className="card-body colorFondo">
                    <div className="card card-success">
                        <div className="card-header">
                            <h3 className="card-title">Aceptar solicitud</h3>
                        </div>
                        <form>
                            <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="IdSolicitud">Id de solicitud</label>
                                <input type="Number" min={"0"} className="form-control" id="IdSolicitud" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="NombreSolicitud">Nombre del producto</label>
                                <input type="text" className="form-control" id="NombreSolicitud" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="DescripcionSolicitud">Descripcion del producto</label>
                                <input type="text" className="form-control" id="DescripcionSolicitud" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="FechaSolicitud">Fecha de entrada</label>
                                <input type="Date"  className="form-control" id="FechaSolicitud" required />
                            </div>
                            <div>
                                <label for="EstadoSolicitud">Estado de la solicitud</label>
                                <select class="custom-select form-control-border border-width-2" id="EstadoSolicitud">
                                    <option>Pendiente</option>
                                    <option>Aprobada</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="CantidadSolicitud">Cantidad</label>
                                <input type="Number" min={"0"} className="form-control" id="CantidadSolicitud" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PrecioSolicitud">Precio total</label>
                                <input type="Number" min={"0"} className="form-control" id="PrecioSolicitud" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ObservacionSolicitud">Observacion</label>
                                <input type="text" className="form-control" id="ObservacionSolicitu" required />
                            </div>
                            <div>
                                <label for="ProveedorSolicitud">Proveedor</label>
                                <select class="custom-select form-control-border border-width-2" id="ProveedorSolicitud">
                                    <option>Colanta</option>
                                    <option>Cocacola</option>
                                    <option>Colgate</option>
                                </select>
                            </div>
                            </div>
                            <div className="card-footer">
                                <Link to="/ConsultarSoli" className="btn btn-primary custom-button mr-2">Volver</Link>
                                <button type="submit" className="btn btn-primary custom-button">Aceptar solicitud y agregar al invetario</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Navegacion>
    </div>
  );
}

export default AceptarSoli;
