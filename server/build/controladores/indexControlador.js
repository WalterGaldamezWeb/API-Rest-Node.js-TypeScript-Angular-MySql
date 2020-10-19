"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INDEX_CONTROLADOR = void 0;
class IndexControlador {
    index(req, res) {
        res.send('Bienvenido!!!');
    }
}
exports.INDEX_CONTROLADOR = new IndexControlador();
