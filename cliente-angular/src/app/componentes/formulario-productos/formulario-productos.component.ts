import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { ProductosService } from '../../servicios/productos.service';
import { Router, ActivatedRoute } from '@angular/router';


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

  editar:boolean = false;

  constructor(private servicio:ProductosService, private router:Router, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const ruta = this.activedRoute.snapshot.params;
    console.log(ruta);
    if (ruta.id) {
      this.servicio.obtenerProductoId(ruta.id).subscribe(
        res => {
          console.log(res);
          this.producto = res;
          this.editar = true;
        },
        err => console.log(err)
      );
    }
  }

  guardarProducto () {
    delete this.producto.id;
    delete this.producto.fecha_creacion;
    this.servicio.guardarProducto(this.producto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.error(err)
    );
  }

  editarProducto () {
    delete this.producto.fecha_creacion;
    this.servicio.actualizarProducto(this.producto.id,this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/productos']);
        },
        err => console.error(err)
      );

  }

}
