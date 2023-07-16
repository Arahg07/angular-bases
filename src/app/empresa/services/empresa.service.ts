import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { nombreEmpresa } from '../interfaces/nombre-empresas.interface';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  public nombreEmpresas:nombreEmpresa[] = [{
    id: uuid(),
    nombre: 'IDS',
    asignacion: 30
  },{
    id: uuid(),
    nombre: 'NDTT',
    asignacion: 50
  }, {
    id: uuid(),
    nombre: 'AST',
    asignacion: 10
  }
];

agregarLista(empresa : nombreEmpresa):void{

  const newEmpresa: nombreEmpresa = { id: uuid(), ... empresa};

  this.nombreEmpresas.push(newEmpresa);
}

/*eliminarEmpresaLista(index:number):void{
  this.nombreEmpresas.splice(index,1);
}*/

deleteEmpresaById( id:string){
  this.nombreEmpresas = this.nombreEmpresas.filter( empresa => empresa.id != id);
}

}
