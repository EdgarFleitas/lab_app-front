import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarCuentaPageRoutingModule } from './actualizar-cuenta-routing.module';

import { ActualizarCuentaPage } from './actualizar-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarCuentaPageRoutingModule
  ],
  declarations: [ActualizarCuentaPage]
})
export class ActualizarCuentaPageModule {}
