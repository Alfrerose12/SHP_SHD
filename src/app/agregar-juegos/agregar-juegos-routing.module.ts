import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarJuegosPage } from './agregar-juegos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarJuegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarJuegosPageRoutingModule {}
