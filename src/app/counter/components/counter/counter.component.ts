import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template:
  `
  <p>Counter:  {{ counter }}</p>

  <button (click)="incrementarValor(1)">+1</button>
  <button (click)="resetValor()">reset</button>
  <button (click)="incrementarValor(-1)">-1</button>`

})

export class CounterComponent{

  public counter:number = 10;

  public incrementarValor( value: number):void{
    this.counter += value;
  }
  public resetValor():void{
    this.counter = 10;
  }

}
