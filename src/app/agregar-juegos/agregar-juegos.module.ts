import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarJuegosPageRoutingModule } from './agregar-juegos-routing.module';

import { AgregarJuegosPage } from './agregar-juegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarJuegosPageRoutingModule
  ],
  declarations: [AgregarJuegosPage]
})
export class AgregarJuegosPageModule {}
