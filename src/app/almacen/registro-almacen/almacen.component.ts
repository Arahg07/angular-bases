import { Component } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent {
  public producto: string = "Leche";
  public stock:number = 20;
  public entradas:number = 10;
  public salidas:number = 5;

  get personalizarNombre():string{
    return this.producto.toUpperCase();
  }

  getAlmacenDescription():string{
    return `${ this.producto } : ${ this.stock}`;
  }

  changeProducto(producto:string):void{

    this.producto = producto;
  }

  changeStock(stock:number):void{
    this.stock = stock;
  }

  reset():void{
    this.producto = "Leche";
    this.stock = 20;
  }


}
