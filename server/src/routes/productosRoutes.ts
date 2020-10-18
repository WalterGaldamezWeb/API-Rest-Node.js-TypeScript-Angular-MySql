import {Router} from 'express';

class ProductosRoutes {
    
    router : Router = Router();

    constructor () {
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config () : void {
        this.router.get('/', (req, res) => res.send('Productos!!!'));
    }
}

const PRODUCTOS_ROUTES = new ProductosRoutes();
//Exportamos solo la ruta
export default PRODUCTOS_ROUTES.router;