"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config() {
        this.router.get('/', (req, res) => res.send('Bienvenido!!!'));
    }
}
const INDEX_ROUTES = new IndexRoutes();
//Exportamos solo la ruta
exports.default = INDEX_ROUTES.router;
