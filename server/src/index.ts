import express, { Application } from 'express';

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
    }

    routes () : void {

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