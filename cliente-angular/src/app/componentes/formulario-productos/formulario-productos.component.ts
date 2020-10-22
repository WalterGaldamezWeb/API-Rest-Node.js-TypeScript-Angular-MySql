import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

  producto: Producto = {
    id : 0,
    nombre : '',
    descripcion : '',
    imagen : '',
    fecha_creacion : new Date()
  };

  constructor(private servicio:ProductosService) { }

  ngOnInit(): void {

  }

  guardarProducto () {
    delete this.producto.id;
    delete this.producto.fecha_creacion;
    this.servicio.guardarProducto(this.producto).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

}
