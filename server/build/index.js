"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        //Inicializar express
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Configurar el puerto del servidor
    config() {
        //si existen un puerto en el servidor lo usa sino usara el 3000
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
    }
    //Inicializar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor en el purto", this.app.get('port'));
        });
    }
}
// Inicializar el Servidor
const SERVER = new Server();
SERVER.start();
