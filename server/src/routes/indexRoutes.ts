import {Router} from 'express';

class IndexRoutes {
    
    router : Router = Router();

    constructor () {
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config () : void {
        this.router.get('/', (req, res) => res.send('Bienvenido!!!'));
    }
}

const INDEX_ROUTES = new IndexRoutes();
//Exportamos solo la ruta
export default INDEX_ROUTES.router;