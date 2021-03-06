import {Router} from 'express';
import { INDEX_CONTROLADOR } from '../controladores/indexControlador'

class IndexRoutes {
    
    router : Router = Router();

    constructor () {
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config () : void {
        this.router.get('/', INDEX_CONTROLADOR.index);
    }
}

const INDEX_ROUTES = new IndexRoutes();
//Exportamos solo la ruta
export default INDEX_ROUTES.router;