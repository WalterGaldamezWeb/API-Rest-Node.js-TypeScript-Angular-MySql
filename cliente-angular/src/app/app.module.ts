import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormularioProductosComponent } from './componentes/formulario-productos/formulario-productos.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormularioProductosComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
