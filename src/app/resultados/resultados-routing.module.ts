import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosPage } from './resultados.page';


const routes: Routes = [
  {
    path: '',
    component: ResultadosPage
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar/listar.module').then( m => m.ListarResultadoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosPageRoutingModule {}
