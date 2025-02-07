import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';



@NgModule({
  declarations: [
    ListaJuegosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaJuegosComponent
  ]
})
export class ComponentsModule { }
