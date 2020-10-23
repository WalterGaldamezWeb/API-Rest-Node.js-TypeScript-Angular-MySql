import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { ProductosService } from '../../servicios/productos.service';



@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos:any = [];

  constructor(private servicio:ProductosService) { }

  ngOnInit(): void {
    this.obtenerTodosProductos();
  }

  obtenerTodosProductos () {
    this.servicio.obtenerTodosProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }

  eliminarProducto (id:string) {
    this.servicio.eliminarProducto(id).subscribe(
      res => {
        console.log('producto eliminado');
        this.obtenerTodosProductos();
      },
      err => console.error(err)
    );
  }
}
