"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControlador_1 = require("../controladores/indexControlador");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config() {
        this.router.get('/', indexControlador_1.INDEX_CONTROLADOR.index);
    }
}
const INDEX_ROUTES = new IndexRoutes();
//Exportamos solo la ruta
exports.default = INDEX_ROUTES.router;
