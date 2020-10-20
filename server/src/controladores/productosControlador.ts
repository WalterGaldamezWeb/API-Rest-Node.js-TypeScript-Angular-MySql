import {Request, Response} from 'express';
import db from '../databaseConexion';

class ProductosControlador {

    public async todosProductos (req:Request, res:Response) {
        const productos = await db.query('SELECT * FROM productos');
        res.json(productos);
    }

    public async productoId (req:Request, res:Response): Promise<any> {
        const {id} = req.params;
        const producto = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
        //console.log(producto);
        if (producto.length > 0) {
            return res.json(producto[0]);
        }
        res.status(404).json({text:'El producto no existe'});
        //res.json({text:'producto ' + req.params.id });
    }

    public async crearProducto (req:Request, res:Response): Promise<void> {
        await db.query('INSERT INTO productos SET ?', [req.body]);
        res.json({text:'producto creado'});
    }

    public async actualizarProducto (req:Request, res:Response):Promise<void> {
        const {id} = req.params;
        await db.query('UPDATE productos SET ? WHERE id = ?', [req.body , id]);
        res.json({text:'producto actualizado'});
    }

    public async eliminarProducto (req:Request, res:Response): Promise<void> {
        const {id} = req.params;
        await db.query('DELETE FROM productos WHERE id = ?', [id]);
        res.json({text:'producto eliminado'});
    }
}

const PRODUCTOS_CONTROLADOR = new ProductosControlador();
export default PRODUCTOS_CONTROLADOR;