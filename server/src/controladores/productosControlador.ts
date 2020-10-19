import {Request, Response} from 'express';
import db from '../databaseConexion';

class ProductosControlador {

    public productos (req:Request, res:Response) {
        db.query('DESCRIBE productos');
        res.json('productos en db');
    }
}

const PRODUCTOS_CONTROLADOR = new ProductosControlador();
export default PRODUCTOS_CONTROLADOR;