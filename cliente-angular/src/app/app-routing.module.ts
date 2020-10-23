import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { FormularioProductosComponent } from './componentes/formulario-productos/formulario-productos.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch:'full'
  },
  {
    path:'productos',
    component: ListaProductosComponent
  },
  {
    path: 'productos/agregar-productos',
    component: FormularioProductosComponent
  },
  {
    path: 'productos/editar-producto/:id',
    component: FormularioProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
