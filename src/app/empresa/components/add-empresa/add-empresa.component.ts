import { Component, EventEmitter, Output } from '@angular/core';
import { nombreEmpresa } from '../../interfaces/nombre-empresas.interface';

@Component({
  selector: 'app-empresa-add-empresa',
  templateUrl: './add-empresa.component.html',
  styleUrls: ['./add-empresa.component.css']
})
export class AddEmpresaComponent {

  @Output()
  public EnviarDatosEmpresa: EventEmitter <nombreEmpresa> = new EventEmitter();

  public empresa:nombreEmpresa = {
    nombre: '',
    asignacion: 0,
  };

  addEmpresa(): void{
    if( this.empresa.nombre.length === 0) return;

    this.EnviarDatosEmpresa.emit(this.empresa);

    this.empresa = {nombre: '', asignacion : 0};
  }


}
