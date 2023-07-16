import { Component, Input, EventEmitter, Output } from '@angular/core';
import { nombreEmpresa } from '../../interfaces/nombre-empresas.interface';
import { v4 as uuid} from 'uuid';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {



  @Input()
  public empresasList:nombreEmpresa[] = [{
    id: uuid(),
    nombre: 'APS',
    asignacion:20

  }];

  @Output()
  public EnviarIdexEmpresa: EventEmitter <string> = new EventEmitter();

  deleteEmpresa(id?:string):void{
    if (!id) return;
    this.EnviarIdexEmpresa.emit(id);
  }

}
