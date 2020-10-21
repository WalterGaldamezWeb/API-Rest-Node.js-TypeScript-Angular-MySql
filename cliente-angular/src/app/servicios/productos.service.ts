import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/producto';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost/api';

  constructor(private productoServicio:ProductosService,
              private http:HttpClient
    ) { }

  obtenerTodosProductos () {
    return this.http.get(`${this.API_URI}/productos`);
  }

  obtenerProductoId (id:string) {
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }

  guardarProducto (producto:Producto) {
    return this.http.post(`${this.API_URI}/productos`, producto);
  }

  actualizarProducto (id:string, producto:Producto) {
    return this.http.put(`${this.API_URI}/productos/${id}`, producto);
  }

  eliminarProducto (id:string) {
    return this.http.delete(`${this.API_URI}/productos/${id}`);
  }

}
