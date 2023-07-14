import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  public productos:string[] = ['Leche', 'Huevo', 'Harina', 'Mantequilla', 'Azucar'];
  public deleteProduct?:string;

  removeProduct():void{
    this.deleteProduct = this.productos.pop();
  }
}
