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
                                <label htmlFor="NombreProducto">Nombre de producto</label>
                                <input type="text" className="form-control" id="NombreProducto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="CodigoProducto">Codigo de barras</label>
                                <input type="Number" min={"0"} className="form-control" id="CodigoProducto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PrecioComProducto">Precio de compra</label>
                                <input type="Number" min={"0"} className="form-control" id="PrecioComProducto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PrecioVenProducto">Precio de venta</label>
                                <input type="Number" min={"0"} className="form-control" id="PrecioVenProducto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="DescripcionProducto">Descripcion</label>
                                <input type="text" className="form-control" id="DescripcionProducto" required />
                            </div>
                            <div class="form-group">
                                <label for="EstadoProducto">Estado</label>
                                <select class="custom-select form-control-border border-width-2" id="EstadoProducto">
                                    <option>Activo</option>
                                    <option>Desactivo</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="CategoriaProducto">Categoria</label>
                                <select class="custom-select form-control-border border-width-2" id="CategoriaProducto">
                                    <option>Lacteos</option>
                                    <option>Granos</option>
                                    <option>Aseo personal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ImagenProducto">Subir imagen</label>
                                <input type="file" className="form-control" id="ImagenProducto" required />
                            </div>
                            <div className="card-footer">
                            <Link to="/ConsultarProd" className="btn btn-primary custom-button mr-2">Volver</Link>
                            <button type="submit" className="btn btn-primary custom-button">Actualizar</button>
                            </div>
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