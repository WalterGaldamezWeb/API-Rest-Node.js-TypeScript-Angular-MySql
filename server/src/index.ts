import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//importamos los routes
import indexRoutes from './routes/indexRoutes';
import productosRoutes from './routes/productosRoutes';

class Server {

    app : Application;

    constructor () {
        //Inicializar express
        this.app = express();
        this.config();
        this.routes();
    }
    //Configurar el puerto del servidor
    config () :void {
        //si existen un puerto en el servidor lo usa sino usara el 3000
        this.app.set('port', process.env.PORT || 3000);
        //ver peticiones http en consola con morgan
        this.app.use(morgan('dev'));
        //para peticiones angular al servidor
        this.app.use(cors());
        //el servidor entiende JSON
        this.app.use(express.json());
        //en caso de enviar desde un formulario html
        this.app.use(express.urlencoded({ extended:false }));
    }
    //usamos la ruta configurada en indexRoutes.ts
    routes () : void {
        this.app.use(indexRoutes);
        this.app.use('/api/productos', productosRoutes);
    }
    //Inicializar el servidor
    start () : void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Servidor en el purto", this.app.get('port'));
        });
    }
}
// Inicializar el Servidor
const SERVER = new Server();
SERVER.start();