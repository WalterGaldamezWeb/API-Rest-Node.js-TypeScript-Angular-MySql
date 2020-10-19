"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databaseConexion_1 = __importDefault(require("../databaseConexion"));
class ProductosControlador {
    productos(req, res) {
        databaseConexion_1.default.query('DESCRIBE productos');
        res.json('productos en db');
    }
}
const PRODUCTOS_CONTROLADOR = new ProductosControlador();
exports.default = PRODUCTOS_CONTROLADOR;
