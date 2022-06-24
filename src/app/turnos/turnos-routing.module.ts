import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnosPage } from './turnos.page';

const routes: Routes = [
  {
    path: '',
    component: TurnosPage
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'turnos/crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar/listar.module').then( m => m.ListarTurnoPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  // {
  //   path: 'actualizar',
  //   loadChildren: () => import('./actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  // },
  // {
  //   path: 'listar',
  //   loadChildren: () => import('./listar/listar.module').then( m => m.ListarPageModule)
  // },
  // {
  //   path: 'crear',
  //   loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnosPageRoutingModule {}