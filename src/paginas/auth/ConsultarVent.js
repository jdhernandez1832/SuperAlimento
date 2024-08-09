import useDataTable from '../../hooks/useDataTable';
import React, { useRef } from 'react';
import Navegacion from "../../componentes/componentes/navegacion"; // Importa el componente correctamente
import "../../componentes/css/Login.css";
import { Link } from "react-router-dom";


const ConsultarVent = () => {
    const tableRef1 = useRef(null);
    useDataTable(tableRef1);
  return (
    <div>
        <Navegacion>
        <div className="card card-success">
            <div className="card-body colorFondo">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Ventas</h3>
                                <div className="card-tools">
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0">
                                <table ref={tableRef1}className="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Id de venta</th>
                                            <th>Fecha de venta</th>
                                            <th>Metodo de pago</th>
                                            <th>Caja</th>
                                            <th>Total de venta</th>
                                            <th>Realizada por</th>
                                            <th>Actualizar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>02/08/2024</td>
                                            <td>Efectivo</td>
                                            <td>1</td>
                                            <td>6000</td>
                                            <td>1075792381</td>
                                            <td><Link to="/ActualizarVent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-header">
                                <Link to="#" className="btn btn-primary custom-button">
                                    Generar reporte de ventas
                                </Link>
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

export default ConsultarVent ;

