import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import Navegacion from "../../componentes/componentes/navegacion"; // Importa el componente correctamente
import "../../componentes/css/Login.css";




const ActualizarVent = () => {
    const navigate = useNavigate(); // Usa useNavigate
  
    const navegacion = (event) => {
      event.preventDefault(); // Previene el comportamiento predeterminado del formulario
      navigate("/ActualizarAgre"); // Redirige al usuario al índice
    };
  
    return (
    <div>
        <Navegacion>
            <div className="card card-success">
                <div className="card-body colorFondo">
                    <div className="card card-success">
                        <div className="card-header">
                            <h3 className="card-title">Actualizar venta</h3>
                        </div>
                        <form onSubmit={navegacion} noValidate>
                            <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="IdVenta">Id de venta</label>
                                <input type="Number" min={"0"} className="form-control" id="IdVenta" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="FechaVenta">Fecha de venta</label>
                                <input type="Date"  className="form-control" id="FechaVenta" required />
                            </div>
                            <div>
                                <label for="MetodoVenta">Metodo de pago</label>
                                <select class="custom-select form-control-border border-width-2" id="MetodoVenta">
                                    <option>Efectivo</option>
                                    <option>Tarjeta</option>
                                    <option>Transferencia</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="CajaVenta">Caja</label>
                                <input type="Number" min={"0"} className="form-control" id="CajaVenta" required />
                            </div>
                            </div>
                            <div className="card-footer">
                                <Link to="/ConsultarVent" className="btn btn-primary custom-button mr-2">Volver</Link>
                                <button type="submit" className="btn btn-primary custom-button mr-2">Actualizar productos</button>
                                <Link to="/ConsultarVent" className="btn btn-primary custom-button">Actualizar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Navegacion>
    </div>
  );
}

export default ActualizarVent;
