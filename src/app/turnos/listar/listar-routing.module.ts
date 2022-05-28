import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarTurnoPage } from './listar.page';

const routes: Routes = [
  {
    path: '',
    component: ListarTurnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarTurnoPageRoutingModule {}
