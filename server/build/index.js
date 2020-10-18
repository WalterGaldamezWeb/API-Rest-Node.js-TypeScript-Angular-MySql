"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//importamos los routes
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
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
        //ver peticiones http en consola con morgan
        this.app.use(morgan_1.default('dev'));
        //para peticiones angular al servidor
        this.app.use(cors_1.default());
        //el servidor entiende JSON
        this.app.use(express_1.default.json());
        //en caso de enviar desde un formulario html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //usamos la ruta configurada en indexRoutes.ts
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/productos', productosRoutes_1.default);
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
