"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config() {
        this.router.get('/', (req, res) => res.send('Productos!!!'));
    }
}
const PRODUCTOS_ROUTES = new ProductosRoutes();
//Exportamos solo la ruta
exports.default = PRODUCTOS_ROUTES.router;
