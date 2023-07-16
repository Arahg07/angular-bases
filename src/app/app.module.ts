import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AlmacenComponent } from './almacen/registro-almacen/almacen.component';
import { ProductoComponent } from './almacen/producto/producto.component';
import { CounterModule } from './counter/components/counter.module';
import { AlmacenModule } from './almacen/almacen.module';
import { EmpresaModule } from './empresa/empresa.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CounterModule, AlmacenModule, EmpresaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
