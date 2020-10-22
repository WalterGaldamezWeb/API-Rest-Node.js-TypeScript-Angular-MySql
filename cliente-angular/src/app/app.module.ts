import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormularioProductosComponent } from './componentes/formulario-productos/formulario-productos.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ProductosService } from './servicios/productos.service';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormularioProductosComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
