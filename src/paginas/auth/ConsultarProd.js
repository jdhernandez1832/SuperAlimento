import React, { Fragment } from "react";
import Navegacion from "../../componentes/componentes/navegacion"; // Importa el componente correctamente
import "../../componentes/css/Login.css";
import { Link } from "react-router-dom";


const ConsultarProd = () => {
  return (
    <div>
        <Navegacion>
        <div className="card card-success">
            <div className="card-body colorFondo">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Productos</h3>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width: 150}}>
                                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-default custom-button">
                                            <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Id de producto</th>
                                            <th>Nombre de producto</th>
                                            <th>Descripción</th>
                                            <th>Cantidad</th>
                                            <th>Precio unitario</th>
                                            <th>Precio total</th>
                                            <th>Caducidad</th>
                                            <th>Categoría</th>
                                            <th>Registrado por</th>
                                            <th>Actualizar</th>
                                            <th>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Paquete de Arroz 500g</td>
                                            <td>Paquete de Arroz 500g de la marca Diana</td>
                                            <td>24</td>
                                            <td>3000</td>
                                            <td>72000</td>
                                            <td>02/08/2024</td>
                                            <td>Granos</td>
                                            <td>1075792381</td>
                                            <td><Link to="/ActualizarProd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                                    </svg>
                                                </Link>
                                            </td>
                                            <td><Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-header">
                                <Link to="#" className="btn btn-primary custom-button mr-2">Generar reporte de productos</Link>
                                <Link to="#" className="btn btn-primary custom-button">Generar reporte productos proximos de caducidad</Link>
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

export default ConsultarProd ;
