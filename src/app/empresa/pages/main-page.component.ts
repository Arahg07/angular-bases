import { Component } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';
import { nombreEmpresa } from '../interfaces/nombre-empresas.interface';


@Component({
  selector: 'app-empresa-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private empresaServce: EmpresaService ){}

    get nombreEmpresas(): nombreEmpresa[]{
      return [ ...this.empresaServce.nombreEmpresas];

  }

  eliminarEmpresas(id: string):void{
    this.empresaServce.deleteEmpresaById(id);
  }

  addEmpresas( empresa: nombreEmpresa):void{
    this.empresaServce.agregarLista(empresa);
  }


}
