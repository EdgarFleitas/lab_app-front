import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUsuarioPageRoutingModule } from './registro-usuario-routing.module';

import { RegistroUsuarioPage } from './registro-usuario.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUsuarioPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [RegistroUsuarioPage]
})
export class RegistroUsuarioPageModule {}
