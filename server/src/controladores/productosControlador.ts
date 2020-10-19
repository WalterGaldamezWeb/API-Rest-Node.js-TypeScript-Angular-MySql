import {Request, Response} from 'express';
import db from '../databaseConexion';

class ProductosControlador {

    public todosProductos (req:Request, res:Response) {
        res.json({text:'Listado de productos'});
    }

    public productoId (req:Request, res:Response) {
        res.json({text:'producto ' + req.params.id });
    }

    public crearProducto (req:Request, res:Response) {
        res.json({text:'producto creado'});
    }

    public actualizarProducto (req:Request, res:Response) {
        res.json({text:'producto actualizado' + req.params.id});
    }

    public eliminarProducto (req:Request, res:Response) {
        res.json({text:'producto eliminado' + req.params.id});
    }
}

const PRODUCTOS_CONTROLADOR = new ProductosControlador();
export default PRODUCTOS_CONTROLADOR;