import {Router} from 'express';
import PRODUCTOS_CONTROLADOR from '../controladores/productosControlador';

class ProductosRoutes {
    
    router : Router = Router();

    constructor () {
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config () : void {
        this.router.get('/', PRODUCTOS_CONTROLADOR.todosProductos);
        this.router.get('/:id', PRODUCTOS_CONTROLADOR.productoId);
        this.router.post('/', PRODUCTOS_CONTROLADOR.crearProducto);
        this.router.put('/:id', PRODUCTOS_CONTROLADOR.actualizarProducto);
        this.router.delete('/:id', PRODUCTOS_CONTROLADOR.eliminarProducto);
    }
}

const PRODUCTOS_ROUTES = new ProductosRoutes();
//Exportamos solo la ruta
export default PRODUCTOS_ROUTES.router;