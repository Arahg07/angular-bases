import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddEmpresaComponent } from './components/add-empresa/add-empresa.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent, ListComponent, AddEmpresaComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[
    MainPageComponent, AddEmpresaComponent
  ]
})
export class EmpresaModule { }
