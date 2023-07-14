import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlmacenComponent } from "./registro-almacen/almacen.component";
import { ProductoComponent } from "./producto/producto.component";


@NgModule({
  declarations: [
    AlmacenComponent, ProductoComponent
  ],
  exports: [
    AlmacenComponent, ProductoComponent
  ],
  imports:[
    CommonModule

  ]
})
export class AlmacenModule{

}
