import {Request, Response} from 'express';

class IndexControlador {

    public index (req:Request, res:Response) {
        res.send('Bienvenido!!!');
    }
}

export const INDEX_CONTROLADOR = new IndexControlador();