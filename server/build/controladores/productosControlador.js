"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductosControlador {
    todosProductos(req, res) {
        res.json({ text: 'Listado de productos' });
    }
    productoId(req, res) {
        res.json({ text: 'producto ' + req.params.id });
    }
    crearProducto(req, res) {
        res.json({ text: 'producto creado' });
    }
    actualizarProducto(req, res) {
        res.json({ text: 'producto actualizado' + req.params.id });
    }
    eliminarProducto(req, res) {
        res.json({ text: 'producto eliminado' + req.params.id });
    }
}
const PRODUCTOS_CONTROLADOR = new ProductosControlador();
exports.default = PRODUCTOS_CONTROLADOR;
