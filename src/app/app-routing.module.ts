import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'laboratorios',
    loadChildren: () => import('./laboratorios/laboratorios.module').then( m => m.LaboratoriosPageModule)
  },
  // {
  //   path: 'turnos',
  //   loadChildren: () => import('./turnos/turnos.module').then( m => m.TurnosPageModule)
  // },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },
  {
    path: 'actualizar-cuenta',
    loadChildren: () => import('./actualizar-cuenta/actualizar-cuenta.module').then( m => m.ActualizarCuentaPageModule)
  },
  {
    path: 'turnos',
    loadChildren: () => import('./turnos/turnos.module').then( m => m.TurnosPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
