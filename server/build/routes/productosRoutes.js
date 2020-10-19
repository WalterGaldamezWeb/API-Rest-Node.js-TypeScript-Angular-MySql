"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosControlador_1 = __importDefault(require("../controladores/productosControlador"));
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Configuracion de la ruta inicial '/' y lo que devuelve
    config() {
        this.router.get('/', productosControlador_1.default.productos);
    }
}
const PRODUCTOS_ROUTES = new ProductosRoutes();
//Exportamos solo la ruta
exports.default = PRODUCTOS_ROUTES.router;
