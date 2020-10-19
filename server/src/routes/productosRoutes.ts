import {Router} from 'express';
import PRODUCTOS_CONTROLADOR from '../controladores/productosControlador';

class ProductosRoutes {
    
    router : Router = Router();

    constructor () {
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config () : void {
        this.router.get('/', PRODUCTOS_CONTROLADOR.productos);
    }
}

const PRODUCTOS_ROUTES = new ProductosRoutes();
//Exportamos solo la ruta
export default PRODUCTOS_ROUTES.router;