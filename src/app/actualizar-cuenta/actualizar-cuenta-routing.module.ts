import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarCuentaPage } from './actualizar-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarCuentaPageRoutingModule {}
