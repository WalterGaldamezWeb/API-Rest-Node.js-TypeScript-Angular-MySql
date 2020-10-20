"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databaseConexion_1 = __importDefault(require("../databaseConexion"));
class ProductosControlador {
    todosProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield databaseConexion_1.default.query('SELECT * FROM productos');
            res.json(productos);
        });
    }
    productoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const producto = yield databaseConexion_1.default.query('SELECT * FROM productos WHERE id = ?', [id]);
            //console.log(producto);
            if (producto.length > 0) {
                return res.json(producto[0]);
            }
            res.status(404).json({ text: 'El producto no existe' });
            //res.json({text:'producto ' + req.params.id });
        });
    }
    crearProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databaseConexion_1.default.query('INSERT INTO productos SET ?', [req.body]);
            res.json({ text: 'producto creado' });
        });
    }
    actualizarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databaseConexion_1.default.query('UPDATE productos SET ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'producto actualizado' });
        });
    }
    eliminarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databaseConexion_1.default.query('DELETE FROM productos WHERE id = ?', [id]);
            res.json({ text: 'producto eliminado' });
        });
    }
}
const PRODUCTOS_CONTROLADOR = new ProductosControlador();
exports.default = PRODUCTOS_CONTROLADOR;
