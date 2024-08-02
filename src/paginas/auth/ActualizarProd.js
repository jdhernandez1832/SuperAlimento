import React, { Fragment } from "react";
import Navegacion from "../../componentes/componentes/navegacion"; // Importa el componente correctamente
import "../../componentes/css/Login.css";
import { Link } from "react-router-dom";


const ActualizarProd = () => {
  return (
    <div>
        <Navegacion>
            <div className="card card-success">
                <div className="card-body colorFondo">
                    <div className="card card-success">
                        <div className="card-header">
                            <h3 className="card-title">Actualizar producto</h3>
                        </div>
                        <form>
                            <div className="card-body">
                            <div className="form-group">
                            <div className="form-group">
                                <label htmlFor="IdProducto">Id de producto</label>
                                <input type="Number" min={"0"} className="form-control" id="IdProducto" required />
                            </div>
                                <label htmlFor="NombreProducto">Nombre de producto</label>
                                <input type="text" className="form-control" id="NombreProducto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="DescripcionProducto">Descripcion de producto</label>
                                <input type="text" className="form-control" id="DescripcionProducto1" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="CantidadProducto">Cantidad</label>
                                <input type="Number" min={"0"} className="form-control" id="CantidadProducto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PrecioProducto">Precio unitario</label>
                                <input type="Number" min={"0"} className="form-control" id="PrecioProducto" required />
                            </div>
                            <div class="form-group">
                                <label for="CategoriaProducto">Categoria</label>
                                <select class="custom-select form-control-border border-width-2" id="CategoriaProducto">
                                    <option>Lacteos</option>
                                    <option>Granos</option>
                                    <option>Aseo personal</option>
                                </select>
                            </div>
                            </div>
                            <div className="card-footer">
                            <Link to="/ConsultarProd" className="btn btn-primary custom-button mr-2">Volver</Link>
                            <button type="submit" className="btn btn-primary custom-button">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Navegacion>
    </div>
  );
}

export default ActualizarProd ;
